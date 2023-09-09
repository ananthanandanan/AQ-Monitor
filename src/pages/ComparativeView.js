// Nav slider for the comparative view
//  Title on left - rigth filter - p1, p2.5, p10, filter - day picker
//

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import Filters from "../components/Filters";
import ComparativeTabs from "../components/ComparativeTabs";
import ChartCard from "../components/ChartCard";
import VisualChart from "../components/VisualChart";
import { praanActions } from "../store/praan-slice";

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

  const filterTimeHandler = (dateTimeData) => {
    dispatch(praanActions.filterWithTime(dateTimeData));
  };

  return (
    <>
      <Header title="Comparative View">
        <Filters
          onFilter={filterTimeHandler}
          filterTime
          filterDate
          // defaultDate={defaultDateTimeValue}
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
