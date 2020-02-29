/* eslint-disable import/no-cycle */
import { RematchStore, RematchDispatch, RematchRootState } from "@rematch/core";
import { counter } from "./counter/counter.model";
import { test } from "./test";
import { loader } from "./loader/loader.model";

export type RootModel = {
  counter: typeof counter;
  test: typeof test;
  loader: typeof loader;
};

export const models: RootModel = {
  counter,
  test,
  loader,
};

export type Store = RematchStore<RootModel>;
export type iRootState = RematchRootState<RootModel>;
export type Dispatch = RematchDispatch<RootModel>;
