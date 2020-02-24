import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { Link } from "react-router-dom";

import routes from "../constants/routes.json";
import { TestIntroduce, TestProcess, TestFinnish } from "../components";

export const TestPage = () => {
  return (
    <>
      <div className="p-3 pt-4">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <Switch>
        <Route exact path={routes.TEST}>
          <Redirect to={routes.TEST_INTRODUCE} />
        </Route>
        <Route path={routes.TEST_INTRODUCE} component={TestIntroduce} />
        <Route path={routes.TEST_PROCESS} component={TestProcess} />
        <Route path={routes.TEST_FINNISH} component={TestFinnish} />
      </Switch>
    </>
  );
};
