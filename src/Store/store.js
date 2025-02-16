import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './reducers/UserSlice';
import postReducer from './reducers/PostSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'post']  // dono slices persist honge
};

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
