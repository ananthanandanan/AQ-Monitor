import React from "react";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";

function OverlayChart() {
  // Function to format the date as "MMM yyyy" (e.g., Jan 2023)
  // const formatMonthYear = (date) => {
  //   const monthNames = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  //   const month = monthNames[date.getMonth()];
  //   const year = date.getFullYear();
  //   return `${month} ${year}`;
  // };

  // // Get data from Redux state
  // const praanData = useSelector((state) => state.praan.praanData);
  // const pValues = useSelector((state) => state.praan.pValues);

  // // Create data for the chart
  // const chartData = Object.keys(pValues).map((pValue) => ({
  //   name: pValue.toUpperCase(),
  //   data: praanData.map((item) => ({
  //     x: new Date(item.t).getTime(), // Use Unix timestamp for x-axis
  //     y: item[pValue], // Use the corresponding pValue for y-axis
  //   })),
  // }));

  // console.log("Praan Data", praanData);
  // console.log("Chart Data", chartData);

  // // Define options for the chart
  // const options = {
  //   chart: {
  //     type: "line",
  //     stacked: false,
  //   },
  //   xaxis: {
  //     type: "datetime", // Use datetime type for x-axis
  //     labels: {
  //       formatter: (value) => {
  //         const date = new Date(value);
  //         return formatMonthYear(date); // Format the label as "MMM yyyy"
  //       },
  //     },
  //   },
  //   yaxis: {
  //     title: {
  //       text: "PM Values",
  //     },
  //   },
  // };

  return (
    <div className="container">
      {/* <Chart
        options={options}
        series={chartData} // Pass the chart data as the series
        type="line"
        width="500"
      /> */}
      <div>Hello</div>
    </div>
  );
}

export default OverlayChart;
