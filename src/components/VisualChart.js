import React from "react";
import { useEffect, useState } from "react"; // Add useEffect and useState
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";

import styles from "./VisualChart.module.css";

function VisualChart({ chartData, isWind }) {
  // Initialize default date (e.g.,d the first date in praanData)
  // const defaultDate = praanData.length > 0 ? praanData[0].t : null;

  // // Set up state to manage the selected date
  // const [selectedDate, setSelectedDate] = useState(defaultDate);

  // // Filter data for the selected date
  // const filteredData = praanData.filter(
  //   (item) =>
  //     // Adjust the date comparison logic as needed (e.g., comparing date part only)
  //     item.t &&
  //     selectedDate &&
  //     item.t.toDateString() === selectedDate.toDateString()
  // );

  // Create data for the chart
  // const chartData1 = Object.keys(deviceFilter).map((device) => ({
  //   name: `Device ${device}`,
  //   data: filteredData.map((item, index) => ({
  //     x: item.t.getTime(), // Use Unix timestamp for x-axis
  //     y: pValues.p1[deviceFilter[device][index]], // Use p1 values for the selected date
  //   })),
  // }));

  // // Define options for the chart
  // console.log(chartData,chartData1);
  // console.log(chartData);
  let options = {};
  let data = [];
  if (isWind) {
    options = {
      chart: {
        type: "bar",
        stacked: false,
      },
      xaxis: {
        categories: chartData.x,
      },
      yaxis: {
        title: {
          text: "Wind Speed",
        },
      },
    };
    data = {
      name: "Wind Speed",
      data: chartData.y,
    };
  } else {
    options = {
      chart: {
        type: "line",
        stacked: false,
      },
      xaxis: {
        type: "datetime", // Use datetime type for x-axis
        labels: {
          formatter: (value) => {
            const date = new Date(value);
            return `${date.getHours()}:${date.getMinutes()}`;
          },
        },
      },
      yaxis: {
        title: {
          text: "PM1 Values",
        },
      },
    };
    data = chartData;
  }

  return (
    <div className={styles["container"]}>
      {/* Chart */}
      <Chart
        options={options}
        series={data}
        type="line"
        width="800"
        height="400"
      />
    </div>
  );
}

export default VisualChart;
