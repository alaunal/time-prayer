import axios from "axios";
import { createModel } from "@rematch/core";
import type { RootModel } from ".";

export type LocationState = { [index: string]: any };

const endPoint = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export const location = createModel<RootModel>()({
  state: {} as LocationState,
  reducers: {
    SET_LOCATION: (state: LocationState, payload: any) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: (dispatch: any) => ({
    async getLocation(payload): Promise<any> {
      try {
        const response = await axios({
          method: "get",
          url: endPoint,
          params: {
            latitude: payload.latitude,
            longitude: payload.longitude,
            localityLanguage: "en",
          },
        });

        const data = response.data;
        dispatch.location.SET_LOCATION(data);
      } catch (error) {
        console.error(error);
      }
    },
  }),
});
