import { configureStore } from "@reduxjs/toolkit";

import { mainSlice } from "@/services/api";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import dataReducer from "../services/dataSlice";
// Persist configuration for data slice
const dataPersistConfig = {
  key: "data",
  storage,
};

// Create a persisted reducer for the auth slice
const persistedDataReducer = persistReducer(dataPersistConfig, dataReducer);

export const store = configureStore({
  reducer: {
    [mainSlice.reducerPath]: mainSlice.reducer,
    data: persistedDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types in serializable check
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(mainSlice.middleware),
  devTools: true,
});

// Create a persistor for the store
export const persistor = persistStore(store);
