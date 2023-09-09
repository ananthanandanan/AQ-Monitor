import { createSlice } from "@reduxjs/toolkit";

const praanSlice = createSlice({
  name: "praan",
  initialState: {
    praanModel: {
      uniqueDevices: [],
      timeData: [],
      deviceData: [],
      data: [],
    },
    filteredTimes: [],
    filteredDevices: [],
  },
  reducers: {
    fetchPraanData(state, action) {
      // Get the data from the action payload and store it in the state
      const data = Object.values(action.payload)[0];

      const timeData = [];
      const deviceData = [];
      const uniqueDevices = new Set();

      const transformedData = data.map((item, index) => {
        timeData.push({ time: item["t"], key: index });
        deviceData.push({ device: item["device"], key: index });
        uniqueDevices.add(item["device"]);

        return {
          p1: item["p1"],
          p2_5: item["p25"],
          p10: item["p10"],
          speed: item["w"],
        };
      });

      state.praanModel = {
        timeData,
        deviceData,
        uniqueDevices: Array.from(uniqueDevices).slice(0, -1),
        data: transformedData,
      };

      state.filteredDevices = deviceData;
      state.filteredTimes = timeData;
    },
    filterWithTime(state, action) {
      const type = action.payload.type;
      const updatedTimes = [];
      const updatedDevices = [];

      if (type === "FILTER_DATE") {
        let date = action.payload.date;

        state.praanModel.timeData.forEach((item) => {
          let time = new Date(item.time);
          if (time.toDateString() === date) {
            updatedTimes.push(item);
            updatedDevices.push(state.praanModel.deviceData[item.key]);
          }
        });
      }
      if (type === "FILTER_DATE_AND_TIME") {
        const { date, startTime, endTime } = action.payload;
        console.log(date, startTime, endTime);
        state.praanModel.timeData.forEach((item) => {
          let time = new Date(item.time);
          if (
            time.toDateString() === date &&
            time.getTime() >= startTime &&
            time.getTime() <= endTime
          ) {
            updatedTimes.push(item);
            updatedDevices.push(state.praanModel.deviceData[item.key]);
          }
        });
      }

      // if (type === "FILTER_TIME") {
      //   const { startTime, endTime } = action.payload;
      //   let defaultDate = new Date(
      //     state.praanModel.timeData[0].time
      //   ).toDateString();
      //   state.praanModel.timeData.forEach((item) => {
      //     let time = new Date(item.time);
      //     if (
      //       item.time.toDateString() === defaultDate &&
      //       time.getTime() >= startTime &&
      //       time.getTime() <= endTime
      //     ) {
      //       updatedTimes.push(item);
      //       updatedDevices.push(state.praanModel.deviceData[item.key]);
      //     }
      //   });
      // }

      state.filteredTimes = updatedTimes;
      state.filteredDevices = updatedDevices;
    },
  },
});

export const praanActions = praanSlice.actions;
export default praanSlice;
