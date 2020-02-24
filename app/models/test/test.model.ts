/* eslint-disable import/no-cycle */
import { Dispatch, iRootState } from "..";

export type TestQuestion = {
  type: string;
  question: string;
  options: string[];
  answer: number;
  userAnswer?: number;
};

export type TestsState = {
  username?: string;
  tests?: TestQuestion[];
  testStep: number;
};

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

      const tests: TestQuestion[] = [
        {
          type: "default",
          question: "How are you?",
          options: ["Im fine", "So damn bad"],
          answer: 1,
        },
        {
          type: "default",
          question: "What the fuck?",
          options: ["Fuck off", "Excuse me?"],
          answer: 0,
        },
      ];

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
