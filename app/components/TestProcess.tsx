import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import routes from "../constants/routes.json";
import { iRootState, Dispatch } from "../models";
import { Loader } from "./Loader";

export const TestProcess = () => {
  const dispatch: Dispatch = useDispatch();
  const history = useHistory();
  const onFinnish = () => {
    history.push(routes.TEST_FINNISH);
  };
  const isLoading = useSelector<iRootState, boolean>(state => state.loader);
  const tests = useSelector<iRootState, TestQuestion[] | undefined>(
    state => state.test.tests,
  );

  useEffect(() => {
    dispatch.test.getTests();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="p-2 d-flex">
        <button
          className="btn btn-primary ml-auto mr-5"
          type="button"
          onClick={onFinnish}
        >
          Finnish Test
        </button>
      </div>
      <div>{JSON.stringify(tests)}</div>
    </>
  );
};
