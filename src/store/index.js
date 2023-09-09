import { configureStore } from "@reduxjs/toolkit";
import praanSlice from "./praan-slice";

/**
 * This is the store for the application. It is used to store the state of the application.
 *
 **/

const store = configureStore({
  reducer: {
    praan: praanSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
