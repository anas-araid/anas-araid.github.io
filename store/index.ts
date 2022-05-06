import { combineReducers, createStore } from '@reduxjs/toolkit';
import featureFlags from '../features/featureFlag/featureFlagsSlice';

export const rootReducer = combineReducers({
  featureFlags,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
