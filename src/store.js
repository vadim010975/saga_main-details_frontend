import { configureStore } from '@reduxjs/toolkit';
import listSlice from './slices/listSlice.js';
import detailsSlice from './slices/detailsSlice.js';
import errorSlice from './slices/errorSlice.js';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas/index.js';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    list: listSlice,
    details: detailsSlice,
    error: errorSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(saga);

export default store;
