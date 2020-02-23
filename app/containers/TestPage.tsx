import React from "react";
import { Switch, Route, Redirect } from "react-router";
import routes from "../constants/routes.json";
import { TestIntroduce } from "../components/TestIntroduce";

export const TestPage = () => {
  return (
    <Switch>
      <Route exact path={routes.TEST}>
        <Redirect to={routes.TEST_INTRODUCE} />
      </Route>
      <Route path={routes.TEST} component={TestIntroduce} />
    </Switch>
  );
};
