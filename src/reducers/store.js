import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit'
import conf from '../config/config';
import rootReducer from './root.reducer';
  
  let store;
  
  export function configureMyStore() {

    if (conf.environment == 'local') {
      store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        enhancers: (getDefaultEnhancers) => getDefaultEnhancers(),
      });
    } else {
      store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        enhancers: (getDefaultEnhancers) => getDefaultEnhancers(),
      });
    }
    return store;
  }