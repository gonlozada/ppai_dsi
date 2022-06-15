import React, { useEffect, useState } from "react";
import {
  Card,
  TableHead,
  Icon,
  Grid,
  Table,
  TableCell,
  TableRow,
  TableBody,
} from "@material-ui/core";

import api from "api";

const Dashboard = () => {
  const [database, setDB] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await api.get("");
      console.log(data);
      setDB(data);
    })();
  }, []);
  return (
    <div className="analytics m-sm-30">
      <div className="flex justify-between items-center items-center mb-6">
        <h3 className="m-0">Objetos en memoria</h3>
      </div>
      <Grid container spacing={3}>
        {Object.keys(database).map((clase) => {
          const columns =
            database[clase].length &&
            Object.keys(
              Object.values(database[clase]).sort(
                (a, b) => Object.keys(b).length - Object.keys(a).length
              )[0]
            );
          return (
            <Grid key={clase} item xs={12}>
              <Card elevation={3} className="p-5">
                <div>
                  <h5>{clase}</h5>
                </div>

                {database[clase].length ? (
                  <Table
                    aria-label="simple table"
                    style={{ overflowX: "scroll" }}
                  >
                    <TableHead>
                      <TableRow>
                        {columns.map((row) => (
                          <TableCell>{row}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {database[clase]?.map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": {
                              border: 0,
                            },
                          }}
                        >
                          {columns.map((column) => {
                            return (
                              <TableCell>
                                {["string", "number"].includes(
                                  typeof row[column]
                                )
                                  ? row[column]
                                  : JSON.stringify(row[column], null, 1)}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div>
                    {typeof database[clase] === "object"
                      ? JSON.stringify(database[clase], null, 1)
                      : "No data..."}
                  </div>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Dashboard;
