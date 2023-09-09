import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import Filters from "../components/Filters";
import ComparativeTabs from "../components/ComparativeTabs";
import ChartCard from "../components/ChartCard";
import VisualChart from "../components/VisualChart";
import { praanActions } from "../store/praan-slice";

/**
 * ComparativeView is a page that displays the comparison between difference devices, for different PM values selected.
 *
 * @returns {JSX.Element}
 *
 */

function ComparativeView() {
  const dispatch = useDispatch();
  const [tab, setTab] = useState("p1");
  const {
    uniqueDevices,
    timeData,
    data: praanData,
  } = useSelector((state) => state.praan.praanModel);
  const deviceValues = useSelector((state) => state.praan.filteredDevices);

  const comparativeData = uniqueDevices.map((device) => {
    const filteredData = [];
    const filteredDeviceValues = deviceValues.filter(
      (item) => item.device === device
    );

    filteredDeviceValues.forEach((item) => {
      const { device: itemDevice, key } = item;
      let time = new Date(timeData[key].time);

      // If the device is the same as the one we are filtering for, then add it to the filtered data
      if (itemDevice === device) {
        filteredData.push({
          x: time.getTime(),
          y: praanData[key][tab],
        });
      }
    });

    return {
      name: device,
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
      <Header title="Comparative View">
        <Filters
          onFilter={filterTimeHandler}
          filterTime
          filterDate
          onClear={onClearHandler}
        />
      </Header>
      <ComparativeTabs
        toggleTabs={(newTabs) => {
          setTab(newTabs);
        }}
      />
      <main>
        <ChartCard title="Comparative Card">
          {comparativeData && <VisualChart chartData={comparativeData} />}
        </ChartCard>
      </main>
    </>
  );
}

export default ComparativeView;
