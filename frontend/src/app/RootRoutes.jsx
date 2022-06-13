import React from "react";
import { Redirect } from "react-router-dom";

const dashboardRoutes = [
  {
    path: "/dashboard",
    component: React.lazy(() => import("./views/dashboard")),
  },
  {
    path: "/cu36",
    component: React.lazy(() => import("./views/RTenMantCorrectivo")),
  },
  
];

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
  },
];

const errorRoute = [
  {
    path: "/404",
    component: React.lazy(() => import("./views/notFound")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];

const routes = [...dashboardRoutes, ...redirectRoute, ...errorRoute];

export default routes;
