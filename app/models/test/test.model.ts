import { remote } from "electron";
/* eslint-disable import/no-cycle */
import { Dispatch, iRootState } from "..";
import { TestsState, TestQuestion } from "./types";
import { DBType } from "../../db";

const db: DBType = remote.getGlobal("database");

const defaultState: TestsState = {
  username: undefined,
  tests: undefined,
  testStep: 0,
};

export const test = {
  state: defaultState,
  reducers: {
    addUserData(state: TestsState, payload: string) {
      return {
        ...state,
        username: payload,
      };
    },
    setTests(state: TestsState, payload: TestQuestion[]) {
      return {
        ...state,
        tests: payload,
      };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async getTests() {
      dispatch.loader.showLoader();
      await new Promise(resolve => setTimeout(resolve, 1000));

      const tests: TestQuestion[] = await db.questions.find({});

      dispatch.test.setTests(tests);
      dispatch.loader.hideLoader();
    },
    async incrementIfOdd(payload: number, rootState: iRootState) {
      const { counter } = rootState;
      if (counter % 2 === 0) {
        return;
      }

      dispatch.counter.increment(payload);
    },
  }),
};
