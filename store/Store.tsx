import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../services/authSlice";
import { mainSlice } from "@/services/api";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Persist configuration for auth slice
const authPersistConfig = {
  key: "auth",
  storage,
};

// Create a persisted reducer for the auth slice
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [mainSlice.reducerPath]: mainSlice.reducer,
    auth: persistedAuthReducer,
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
