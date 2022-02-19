import axios from "axios";
import { createModel } from "@rematch/core";
import type { RootModel } from ".";

export type ScheduleState = any;

const endPoint = " https://api.aladhan.com/v1/";

export const schedule = createModel<RootModel>()({
  state: {} as ScheduleState,
  reducers: {
    SET_TIMES: (state: ScheduleState, payload: any) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: (dispatch: any) => ({
    async fetchTimes(payload): Promise<any> {
      try {
        const response = await axios({
          method: "get",
          url: `${endPoint}calendar`,
          params: {
            latitude: payload.latitude,
            longitude: payload.longitude,
            method: "2",
            month: payload.month,
            year: payload.year,
          },
        });

        const data: any = response.data;

        if (data.code === 200) {
          dispatch.schedule.SET_TIMES(data.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchTimesByDate(payload): Promise<any> {
      try {
        const response = await axios({
          method: "get",
          url: `${endPoint}timings/${payload.date}`,
          params: {
            latitude: payload.latitude,
            longitude: payload.longitude,
            method: "2",
          },
        });

        const data: any = response.data;

        if (data.code === 200) {
          dispatch.schedule.SET_TIMES(data.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
  }),
});
