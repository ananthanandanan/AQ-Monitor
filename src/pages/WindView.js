// Showing a line graph of wind speed and direction
// Show the date and day of the week.
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import ChartCard from "../components/ChartCard";

import Filters from "../components/Filters";
import { praanActions } from "../store/praan-slice";
import VisualChart from "../components/VisualChart";

/**
 * WindyView is a page that displays the wind speed for the week.
 *
 * @returns {JSX.Element}
 *
 */
function WindyView({ toggleDataset }) {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.praan.windDate);
  const { data: praanData } = useSelector((state) => state.praan.praanModel);
  const timeValues = useSelector((state) => state.praan.filteredTimes);
  const [windData, setWindData] = useState({
    x: [],
    y: [],
    maxDay: "",
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
          y.push({ dayIndex: day, speed: parseInt(praanData[key].speed) });
        }
      });

      console.log(y);
      filteredData.push(
        y.reduce((acc, cur) => (acc.speed > cur.speed ? acc : cur), {
          dayIndex: -1,
          speed: -1,
        })
      );
    });

    let maxDayIndex = filteredData.reduce(
      (acc, cur) => (acc.speed > cur.speed ? acc : cur),
      {
        dayIndex: -1,
        speed: -1,
      }
    ).dayIndex;

    setWindData({
      maxDay: dayStrings[maxDayIndex],
      x: dayOrder,
      y: filteredData.map((item) => item.speed),
    });
  }, [date, timeValues, praanData]);
  const onFilterDate = (date) => {
    let endDate = date.date;
    let startDate = new Date(date.date.toDateString());
    startDate.setDate(endDate.getDate() - 6);

    dispatch(
      praanActions.filterWeek({
        startDate: startDate,
        endDate: endDate,
      })
    );
  };
  // Clear the filter
  const onClearHandler = () => {
    dispatch(praanActions.clearFilter());
  };
  return (
    <>
      <Header title="Wind View">
        <Filters
          filterDate
          isWeekly
          onFilter={onFilterDate}
          onClear={onClearHandler}
          toggleDataset={toggleDataset}
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
