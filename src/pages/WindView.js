// Showing a line graph of wind speed and direction
// Show the date and day of the week.
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import ChartCard from "../components/ChartCard";

import Filters from "../components/Filters";
import { praanActions } from "../store/praan-slice";
import VisualChart from "../components/VisualChart";

function WindyView() {
  const dispatch = useDispatch();
  const [date, setDate] = useState();
  const { data: praanData } = useSelector((state) => state.praan.praanModel);
  const timeValues = useSelector((state) => state.praan.filteredTimes);
  const [windData, setWindData] = useState({
    x: [],
    y: [],
  });

  useEffect(() => {
    if (!date) {
      return;
    }

    let filteredData = [];
    let days = new Set();
    let dayStrings = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dayOrder = [];

    timeValues.forEach((item) => {
      const { time: itemTime } = item;
      let time = new Date(itemTime);
      days.add(time.getDay());
    });
    days.forEach((day) => {
      let y = [];
      dayOrder.push(dayStrings[day]);
      timeValues.forEach((item) => {
        const { time: itemTime, key } = item;
        let time = new Date(itemTime);
        if (time.getDay() === day) {
          y.push(parseInt(praanData[key].speed));
        }
      });
      y = Math.max(...y);
      filteredData.push(y);
    });
    setWindData({
      x: dayOrder,
      y: filteredData,
    });
  }, [date, timeValues, praanData]);
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
        <ChartCard title="Wind Card">
          {date ? (
            <VisualChart isWind chartData={windData} />
          ) : (
            <h1>Enter a valid Date</h1>
          )}
        </ChartCard>
      </main>
    </>
  );
}

export default WindyView;
