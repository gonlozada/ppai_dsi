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

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        "opcionRegistrarRTEnMantenimientoCorrectivo"
      );
      console.log("SAITAMA", data);
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
    // setRecursos(data ?? []);
  };

  if (!recursos) return <CircularProgress />;

  return (
    <div className="analytics m-sm-30">
      <div className="flex justify-between items-center items-center mb-6">
        <h5 className="m-0">
          Registrar Ingreso de RT en Mantenimiento Correctivo
        </h5>
      </div>

      <Grid container spacing={3}>
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
                  >
                    Continuar
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default RTenMantCorrectivo;
