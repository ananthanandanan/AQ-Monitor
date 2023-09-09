import { configureStore } from "@reduxjs/toolkit";
import praanSlice from "./praan-slice";

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
