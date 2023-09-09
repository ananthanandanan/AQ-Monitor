// Showing a line graph of wind speed and direction
// Show the date and day of the week.
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import ChartCard from "../components/ChartCard";

import Filters from "../components/Filters";
import VisualChart from "../components/VisualChart";
import { praanActions } from "../store/praan-slice";
import WindyChart from "../components/WindyChart";
import { max } from "date-fns";

function WindyView() {
  const dispatch = useDispatch();
  const [date, setDate] = useState();
  const { data: praanData } = useSelector((state) => state.praan.praanModel);
  const timeValues = useSelector((state) => state.praan.filteredTimes);

  let windData = [];

  const calWindData = () => {
    if (!date) {
      return;
    }
    let filteredData = [];
    let days = new Set();

    timeValues.forEach((item) => {
      const { time: itemTime, key } = item;
      let time = new Date(itemTime);
      days.add(time.getDay());
    });
    days.forEach((day) => {
      let y = [];
      timeValues.forEach((item) => {
        const { time: itemTime, key } = item;
        let time = new Date(itemTime);
        if (time.getDay() === day) {
          y.push(parseInt(praanData[key].speed));
        }
      });
      console.log(y);
      y = Math.max(...y);
      console.log(y);
      filteredData.push({
        x: day,
        y,
      });
    });

    return filteredData;
  };

  windData = calWindData();
  const onFilterDate = (date) => {
    let endDate = date.date;
    let startDate = new Date(date.date.toDateString());
    startDate.setDate(endDate.getDate() - 6);

    setDate({
      startDate,
      endDate,
    });

    dispatch(
      praanActions.filterWeek({
        startDate: startDate,
        endDate: endDate,
      })
    );
  };

  // console.log(calculateMaxWindyDay());

  const maxDay = (windData) => {
    let day = 0;
    let wind = 0;
    windData.forEach((item) => {
      if (item.y > wind) {
        wind = item.y;
        day = item.x;
      }
    });

    return day;
  };

  return (
    <>
      <Header title="Overlay View">
        <Filters
          filterDate
          isWeekly
          onFilter={onFilterDate}
          // onClear={onClearHandler}
        />
      </Header>
      <main>
        <ChartCard
          title="Wind Card"
          startDate={date.startDate}
          endDate={date.endDate}
          getMaxDay={maxDay}
          data={windData}
        />
      </main>
    </>
  );
}

export default WindyView;
