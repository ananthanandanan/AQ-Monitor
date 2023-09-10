import Chart from "react-apexcharts";
import { useMantineColorScheme } from "@mantine/core";

/**
 * VisualChart is a component that uses the ApexCharts library to display charts, depending on the view.
 * @param {Object} props
 * @param {Object} props.chartData - The data for the chart
 * @param {boolean} props.isWind - Whether the chart is for wind or not
 *
 * @returns {JSX.Element}
 *
 */
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
    <>
      <Chart
        options={options}
        type={type}
        series={data}
        width="850"
        height="500"
      />
      {isWind && (
        <h2 style={{ width: "100%", textAlign: "center" }}>
          {" "}
          The windiest day of the week is {chartData.maxDay}
        </h2>
      )}
    </>
  );
}

export default VisualChart;
