import React from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { routes } from "./routes";

export const AppRoutes = () => (
  <Router>
    <Switch>
      {routes.map(({ name, path, component, exact }) => (
        <Route key={name} path={path} exact={exact} component={component} />
      ))}
      <Redirect to="/" />
    </Switch>
  </Router>
);
