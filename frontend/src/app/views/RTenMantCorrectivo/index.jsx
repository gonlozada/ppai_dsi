import React, { useEffect, useState } from "react";
import { Card, IconButton, Icon, Grid } from "@material-ui/core";

import api from "api";

const RTenMantCorrectivo = () => {
  const [recursos, setRecursos] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        "opcionRegistrarRTEnMantenimientoCorrectivo"
      );
      console.log("SAITAMA", data);
      setRecursos(data);
    })();
  }, []);

  return (
    <div className="analytics m-sm-30">
      <div className="flex justify-between items-center items-center mb-6">
        <h3 className="m-0">Overview</h3>
      </div>

      <pre>{JSON.stringify(recursos, null, 2)}</pre>
      {/* <Grid container spacing={3}>
        {statList.map((item, ind) => (
          <Grid key={item.title} item md={3} sm={6} xs={12}>
            <Card elevation={3} className="p-5 flex">
              <div>
                <IconButton size="small" className="p-2 bg-light-gray">
                  <Icon className="text-muted">{item.icon}</Icon>
                </IconButton>
              </div>
              <div className="ml-4">
                <h3 className="mt-1 text-32">{item.amount.toLocaleString()}</h3>
                <p className="m-0 text-muted">{item.title}</p>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
};

export default RTenMantCorrectivo;
