import { createSlice } from "@reduxjs/toolkit";

const praanSlice = createSlice({
  name: "praan",
  initialState: [],
  reducers: {
    fetchPraanData(state, action) {
      const data = Object.values(action.payload);
      console.log("Data:", data);
      return data[0];
    },
  },
});

export const praanActions = praanSlice.actions;
export default praanSlice;
