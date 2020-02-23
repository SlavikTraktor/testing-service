import React from "react";
import { Switch, Route } from "react-router";
import routes from "./constants/routes.json";
import App from "./containers/App";
import HomePage from "./containers/HomePage";
import Counter from "./components/Counter";
import { TestPage } from "./containers/TestPage";

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.COUNTER} component={Counter} />
        <Route path={routes.TEST} component={TestPage} />
      </Switch>
    </App>
  );
}
