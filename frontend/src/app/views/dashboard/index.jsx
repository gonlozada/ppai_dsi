import React, { useEffect } from "react";
import {
  Card,
  TextField,
  MenuItem,
  IconButton,
  Icon,
  Grid,
} from "@material-ui/core";
import StatCard3 from "./shared/StatCard3";
import StatCard4 from "./shared/StatCard4";
import GaugeProgressCard from "./shared/GuageProgressCard";
import FollowerCard from "./shared/FollowerCard";
import FollowerCard2 from "./shared/FollowerCard2";

import api from "api";

const Analytics2 = () => {
  useEffect(() => {
    (async () => {
      const { data } = await api.get("");
      console.log("SAITAMA", data);
    })();
  }, []);
  return (
    <div className="analytics m-sm-30">
      <div className="flex justify-between items-center items-center mb-6">
        <h3 className="m-0">Overview</h3>
      </div>

      <StatCard3 />

      <Card className="mt-5 mb-6" elevation={3}>
        <div className=" px-4 py-3 mb-6 flex justify-between items-center bg-light-gray">
          <span className="font-medium text-muted">STATISTICS</span>
          <IconButton size="small">
            <Icon>more_horiz</Icon>
          </IconButton>
        </div>
      </Card>

      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <StatCard4 />
        </Grid>
        <Grid item md={4} xs={12}>
          <GaugeProgressCard />
        </Grid>
        <Grid item md={4} xs={12}>
          <FollowerCard />
          <FollowerCard2 />
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytics2;
