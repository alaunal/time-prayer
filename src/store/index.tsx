/* global */
import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import createPersistPlugin, { getPersistor } from "@rematch/persist";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading"
import storage from "redux-persist/es/storage";
import { models, RootModel } from "../models";

type FullModel = ExtraModelsFromLoading<RootModel>

// Create plugins
const persistPlugin: any = createPersistPlugin({
  key: "react-app",
  storage,
  blacklist: [],
});

const store = init({
  models,
  redux: {
    middlewares: [],
  },
  plugins: [persistPlugin, loadingPlugin()],
});

const persistor = getPersistor();

const configureStore = () => {
  return { persistor, store };
};

export default configureStore;

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
