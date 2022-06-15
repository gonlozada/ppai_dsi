import React, { useEffect, useState } from "react";
import {
  Card,
  IconButton,
  Icon,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListSubheader,
  CardHeader,
  Button,
  CircularProgress,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import api from "api";
import moment from "moment";

const RTenMantCorrectivo = () => {
  const [step, setStep] = useState(1);
  const [recursos, setRecursos] = useState();
  const [recursoSeleccionado, setRTSeleccionado] = useState("");
  const [fechaFinMantenimiento, setFechaFinMantenimiento] = useState(
    moment().add(1, "day").toDate()
  );
  const [razon, setRazon] = useState("");
  const [turnosACancelar, setTurnosACancelar] = useState({});
  const [notifEmail, setNotifWEmail] = useState(true);
  const [notifWhastapp, setNotifWhatsapp] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        "opcionRegistrarRTEnMantenimientoCorrectivo"
      );
      setRecursos(data ?? []);
    })();
  }, []);

  const handleStep1 = async () => {
    setStep(2);

    const { data } = await api.post(
      "opcionRegistrarRTEnMantenimientoCorrectivo/tomarDatosMantenimiento",
      {
        recursoSeleccionado,
        fechaFinMantenimiento,
        razon,
      }
    );
    console.log("SAITAMA2", data);
    setTurnosACancelar(data ?? {});
  };

  const handleStep2 = async () => {
    setLoading(true);
    const { data } = await api.post(
      "opcionRegistrarRTEnMantenimientoCorrectivo/tomarConfirmacion",
      {
        notifEmail,
        notifWhastapp,
      }
    );
    setTimeout(() => {
      alert(data.message);
      window.location.href = "/";
    }, 1500);
  };

  if (!recursos || loading)
    return (
      <div className="flex justify-center items-center m-5">
        <CircularProgress />;
      </div>
    );

  const recursoSeleccionadoDoc =
    recursoSeleccionado !== "" &&
    Object.values(recursos)
      .flat()
      .find((r) => r.id === recursoSeleccionado);

  return (
    <div className="analytics m-sm-30">
      <div
        className="flex justify-between items-center mb-6"
        style={{ fontSize: 20 }}
      >
        Registrar Ingreso de RT en Mantenimiento Correctivo
      </div>

      <Grid container spacing={3}>
        {step === 1 ? (
          <Grid item xl={3} sm={6} xs={12}>
            <Card elevation={3} className="p-5">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <FormControl className="w-full" variant="outlined">
                    <InputLabel htmlFor="grouped-select">
                      Recurso Tecnologico a ingresar...
                    </InputLabel>
                    <Select
                      value={recursoSeleccionado}
                      onChange={({ target }) => setRTSeleccionado(target.value)}
                      id="grouped-select"
                      label="Recurso Tecnologico a ingresar..."
                    >
                      <MenuItem value="">
                        <em>Ninguno</em>
                      </MenuItem>
                      {Object.keys(recursos).map((tipo) => [
                        <ListSubheader>{tipo}</ListSubheader>,
                        recursos[tipo].map((rt) => (
                          <MenuItem key={rt.id} value={rt.id}>
                            #{rt.numeroRT} {rt.marca.nombre}{" "}
                            {rt.modeloDelRT.nombre}
                          </MenuItem>
                        )),
                      ])}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      fullWidth
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      autoOk={true}
                      margin="normal"
                      id="date-picker-start"
                      label="Fecha Fin Mantenimiento"
                      inputVariant="outlined"
                      // maxDate={Date.now()}
                      // className={classes.datePicker}
                      value={fechaFinMantenimiento}
                      onChange={setFechaFinMantenimiento}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                      disabled={recursoSeleccionado === ""}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    multiline
                    value={razon}
                    onChange={({ target }) => setRazon(target.value)}
                    placeholder="Razon del mantenimiento"
                    variant="outlined"
                    fullWidth
                    disabled={recursoSeleccionado === ""}
                    rows={2}
                  />
                </Grid>
                <Grid item xs={12}>
                  <div className="flex justify-end mt-2">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleStep1}
                      disabled={recursoSeleccionado === ""}
                    >
                      Continuar
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ) : step === 2 ? (
          <Grid item xl={6} md={8} xs={12}>
            <Card elevation={3} className="p-5">
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  <span>Turnos a cancelar</span>
                </Grid>
                {Object.keys(turnosACancelar).map((cientifico) => (
                  <div key={cientifico} className="mt-5 mb-3">
                    <div>
                      <b>{cientifico}</b>
                    </div>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Fecha</TableCell>
                          <TableCell>Hora</TableCell>
                          <TableCell>Cientifico</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {turnosACancelar[cientifico].map((row) => (
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {moment(row.fechaHoraInicio).format("DD/MM/YYYY")}
                            </TableCell>
                            <TableCell>
                              {moment(row.fechaHoraInicio).format("hh:mm A")}
                            </TableCell>
                            <TableCell>
                              {row.personalCientifico.nombre} (
                              {row.personalCientifico.correoElectronicoPersonal}
                              )
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ))}
                <Grid
                  item
                  xs={12}
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    marginTop: 30,
                  }}
                >
                  <span>Confirmar datos</span>
                </Grid>
                <Grid item xs={12}>
                  <b className="pr-5">Producto Seleccionado:</b>
                  <span>
                    #{recursoSeleccionadoDoc?.numeroRT}{" "}
                    {recursoSeleccionadoDoc?.marca?.nombre}{" "}
                    {recursoSeleccionadoDoc?.modeloDelRT?.nombre}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <b className="pr-5">Notificar por:</b>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={notifEmail}
                        onChange={({ target }) =>
                          setNotifWEmail(target.checked)
                        }
                      />
                    }
                    label="Email"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={notifWhastapp}
                        onChange={({ target }) =>
                          setNotifWhatsapp(target.checked)
                        }
                      />
                    }
                    label="Whatsapp"
                  />
                </Grid>
                <Grid item xs={12}>
                  <div className="flex justify-end mt-2">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleStep2}
                    >
                      Confirmar
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </div>
  );
};

export default RTenMantCorrectivo;
