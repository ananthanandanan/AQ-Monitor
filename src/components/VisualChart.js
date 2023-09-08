import React from "react";
import { useEffect, useState } from "react"; // Add useEffect and useState
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";

import styles from "./VisualChart.module.css";

function VisualChart() {
  // Get data from Redux state
  const praanData = useSelector((state) => state.praan.praanData);
  const deviceFilter = useSelector((state) => state.praan.deviceFilter);
  const pValues = useSelector((state) => state.praan.pValues);

  // Initialize default date (e.g., the first date in praanData)
  const defaultDate = praanData.length > 0 ? praanData[0].t : null;

  // Set up state to manage the selected date
  const [selectedDate, setSelectedDate] = useState(defaultDate);

  // Filter data for the selected date
  const filteredData = praanData.filter((item) => {
    // Adjust the date comparison logic as needed (e.g., comparing date part only)
    return item.t.toDateString() === selectedDate.toDateString();
  });

  // Create data for the chart
  const chartData = Object.keys(deviceFilter).map((device) => ({
    name: `Device ${device}`,
    data: filteredData.map((item, index) => ({
      x: item.t.getTime(), // Use Unix timestamp for x-axis
      y: pValues.p1[deviceFilter[device][index]], // Use p1 values for the selected date
    })),
  }));

  // Define options for the chart
  const options = {
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

  // Handle date selection
  const handleDateSelect = (event) => {
    const selectedDate = new Date(event.target.value);
    setSelectedDate(selectedDate);
  };

  return (
    <div className={styles["container"]}>
      {/* Date selection input */}
      <div>
        Select Date:{" "}
        <input
          type="date"
          value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
          onChange={handleDateSelect}
        />
      </div>

      {/* Chart */}
      <Chart options={options} series={chartData} type="line" width="500" />
    </div>
  );
}

export default VisualChart;
