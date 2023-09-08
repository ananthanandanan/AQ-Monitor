import { createSlice } from "@reduxjs/toolkit";

const praanSlice = createSlice({
  name: "praan",
  initialState: {
    praanData: [],
    deviceFilter: {},
    pValues: {},
  },
  reducers: {
    fetchPraanData(state, action) {
      // Get the data from the action payload and store it in the state
      const data = Object.values(action.payload)[0];

      const devices = {};
      const pValues = {
        p1: [],
        p2_5: [],
        p10: [],
      };

      const transformedData = data.map((item, index) => {
        let device = item["device"];
        if (!devices[device]) {
          devices[device] = [];
        }
        devices[device].push(index);
        pValues["p1"].push(item["p1"]);
        pValues["p2_5"].push(item["p2_5"]);
        pValues["p10"].push(item["p10"]);

        return {
          ...item,
          t: new Date(item["t"]),
        };
      });
      console.log(transformedData);
      state.praanData = transformedData;
      state.deviceFilter = devices;
      state.pValues = pValues;
    },
  },
});

export const praanActions = praanSlice.actions;
export default praanSlice;
