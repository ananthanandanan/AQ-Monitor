// Title left, filter - time range,
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import ChartCard from "../components/ChartCard";
import Filters from "../components/Filters";
import VisualChart from "../components/VisualChart";
import { praanActions } from "../store/praan-slice";

// OverlayView is a page that is used to compare the different PM values across the time range selected.
function OverlayView() {
  const dispatch = useDispatch();
  const { data: praanData } = useSelector((state) => state.praan.praanModel);
  const timeValues = useSelector((state) => state.praan.filteredTimes);

  // Overlay data is an array of objects, where each object contains the name of the particle and the data for that particle
  const overlayData = ["p1", "p2_5", "p10"].map((particle) => {
    let filteredData = [];

    // For each time value, get the data for the particle
    timeValues.forEach((item) => {
      const { time: itemTime, key } = item;
      let time = new Date(itemTime);

      filteredData.push({
        x: time.getTime(),
        y: praanData[key][particle],
      });
    });

    return {
      name: particle,
      data: filteredData,
    };
  });

  // Filter the data based on the time selected
  const filterTimeHandler = (dateTimeData) => {
    dispatch(praanActions.filterWithTime(dateTimeData));
  };
  // Clear the filter
  const onClearHandler = () => {
    dispatch(praanActions.clearFilter());
  };

  return (
    <>
      <Header title="Overlay View">
        <Filters
          filterDate
          filterTime
          onFilter={filterTimeHandler}
          onClear={onClearHandler}
        />
      </Header>
      <main>
        <ChartCard title="Comparative Card">
          {overlayData && <VisualChart chartData={overlayData} />}
        </ChartCard>
      </main>
    </>
  );
}

export default OverlayView;
