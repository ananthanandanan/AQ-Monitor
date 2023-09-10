import { createSlice } from "@reduxjs/toolkit";

/**
 * This slice is responsible for storing the data related to the praan model
 * @name praanSlice
 * @memberOf store
 * @property {Object} praanModel - The praan model data
 * @property {Array} praanModel.uniqueDevices - The unique devices
 * @property {Array} praanModel.timeData - The time data
 * @property {Array} praanModel.deviceData - The device data
 * @property {Array} praanModel.data - The data
 * @property {Array} filteredTimes - The filtered times
 * @property {Array} filteredDevices - The filtered devices
 * @property {function} fetchPraanData - Function to fetch the praan data
 * @property {function} filterWithTime - Function to filter the data with time
 * @property {function} filterWeek - Function to filter the data with week
 * @property {function} clearFilter - Function to clear the filter
 * @property {Object} windDate - The day of the week, that is windiest
 **/

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
    windDate: null,
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
    // Filter the data based on the date and time selected
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

      state.filteredTimes = updatedTimes;
      state.filteredDevices = updatedDevices;
    },
    filterWeek(state, action) {
      const { startDate, endDate } = action.payload;
      const updatedTimes = [];
      const updatedDevices = [];
      state.praanModel.timeData.forEach((item) => {
        let time = new Date(item.time);

        if (time >= startDate && time <= endDate) {
          updatedTimes.push(item);
          updatedDevices.push(state.praanModel.deviceData[item.key]);
        }
      });

      state.filteredTimes = updatedTimes;
      state.filteredDevices = updatedDevices;
      state.windDate = startDate;
    },
    clearFilter(state, action) {
      state.filteredTimes = state.praanModel.timeData;
      state.filteredDevices = state.praanModel.deviceData;
      state.windDate = null;
    },
  },
});

export const praanActions = praanSlice.actions;
export default praanSlice;
