import Chart from "react-apexcharts";
import { useMantineColorScheme } from "@mantine/core";

function VisualChart({ chartData, isWind }) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  let options = {};
  let data = [];
  let type = "";

  if (isWind) {
    options = {
      chart: {
        type: "bar",
        stacked: false,
      },
      theme: {
        mode: isDark ? "dark" : "light",
        palette: "palette1",
      },
      xaxis: {
        categories: chartData.x,
      },
    };
    type = "bar";
    data = [
      {
        name: "Wind Speed",
        data: chartData.y,
      },
    ];
  } else {
    options = {
      theme: {
        mode: isDark ? "dark" : "light",
        palette: "palette1",
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
          text: "PM Values",
        },
      },
    };
    type = "line";
    data = chartData;
  }

  return (
    <Chart
      options={options}
      type={type}
      series={data}
      width="850"
      height="500"
    />
  );
}

export default VisualChart;
