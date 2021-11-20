import { createModel } from "@rematch/core";
import type { RootModel } from ".";

export type ScheduleState = any;

export const schedule = createModel<RootModel>()({
  state: {},
  reducers: {},
  effects: {},
});
