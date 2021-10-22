/* global */
import { init, RematchRootState, RematchDispatch } from '@rematch/core';
import createPersistPlugin, { getPersistor } from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
import storage from 'redux-persist/es/storage';
import * as models from '../models';


// Create plugins
const persistPlugin: any = createPersistPlugin({
    key: 'react-app',
    storage,
    blacklist: [],
});

const loadingPlugin: any = createLoadingPlugin({});

const configureStore = () => {
    const store = init({
      models,
      redux: {
        middlewares: [],
      },
      plugins: [persistPlugin, loadingPlugin],
    });

    const persistor = getPersistor();
    const { dispatch } = store;

    return { persistor, store, dispatch };
};

export default configureStore;

export type RootState = RematchRootState<typeof models>
export type RootDispatch = RematchDispatch<typeof models>
