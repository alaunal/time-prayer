import { createModel } from "@rematch/core";
import type { RootModel } from ".";

export type LocationState = any;

export const location = createModel<RootModel>()({
  state: {},
  reducers: {},
  effects: {},
});
