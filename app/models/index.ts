/* eslint-disable import/no-cycle */
import { RematchStore, RematchDispatch, RematchRootState } from "@rematch/core";
import { counter } from "./counter/counter.model";

export type RootModel = {
  counter: typeof counter;
};

export const models: RootModel = {
  counter,
};

export type Store = RematchStore<RootModel>;
export type iRootState = RematchRootState<RootModel>;
export type Dispatch = RematchDispatch<RootModel>;
