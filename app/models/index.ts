/* eslint-disable import/no-cycle */
import { RematchStore, RematchDispatch, RematchRootState } from "@rematch/core";
import { counter } from "./counter/counter.model";
import { test } from "./test/test.model";

export type RootModel = {
  counter: typeof counter;
  test: typeof test;
};

export const models: RootModel = {
  counter,
  test,
};

export type Store = RematchStore<RootModel>;
export type iRootState = RematchRootState<RootModel>;
export type Dispatch = RematchDispatch<RootModel>;
