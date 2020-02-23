import React from "react";
import { Switch, Route } from "react-router";
import routes from "./constants/routes.json";
import App from "./containers/App";
import HomePage from "./containers/HomePage";
import Counter from "./components/Counter";

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.COUNTER} component={Counter} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
