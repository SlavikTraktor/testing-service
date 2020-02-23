/* eslint-disable import/no-cycle */
import { Dispatch, iRootState } from "..";

export const counter = {
  state: 0, // initial state
  reducers: {
    increment(state: number, payload: number) {
      return state + payload;
    },
    decrement(state: number, payload: number) {
      return state - payload;
    },
  },
  effects: (dispatch: Dispatch) => ({
    async incrementAsync(payload: number) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.counter.increment(payload);
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
