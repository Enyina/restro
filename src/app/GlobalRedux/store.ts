"use client";

import {combineReducers, configureStore} from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
    key: "root",
    storage,
    //   whitelist: ["cart"],
  };
 
const persistedReducer = persistReducer(persistConfig, cartSlice);
export const store = configureStore({
    reducer: {
        cart : persistedReducer
    }
})
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.getState;
