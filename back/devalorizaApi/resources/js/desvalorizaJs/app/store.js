import { configureStore } from '@reduxjs/toolkit';
import { configReducer } from '../server/slices/config'
import { apiReducer } from '../server/slices/api'
export default configureStore({
  reducer: {
    api: apiReducer,
    config: configReducer
  },
});
