import React from "react";
import Chart from "react-apexcharts";
import { useMantineColorScheme } from "@mantine/core";

import styles from "./VisualChart.module.css";

function VisualChart({ chartData, isWind }) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
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
      theme: {
        mode: isDark ? "dark" : "light",
        palette: "palette1",
        monochrome: {
          enabled: false,
          color: "#255aee",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
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
        width="850"
        height="550"
      />
    </div>
  );
}

export default VisualChart;
