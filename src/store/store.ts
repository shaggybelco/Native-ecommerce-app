import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, REHYDRATE, FLUSH, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../reducers/auth.reducer';
import cartReducer from '../reducers/cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: persistReducer({ key: 'cart', storage }, cartReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const authStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(authStore);
export type AppDispatch = typeof authStore.dispatch;

