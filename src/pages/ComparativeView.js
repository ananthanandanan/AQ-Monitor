// Nav slider for the comparative view
//  Title on left - rigth filter - p1, p2.5, p10, filter - day picker
//

import { useRef } from "react";
import { ActionIcon } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";
import { Button } from "@mantine/core";

import Header from "../components/Header";
import ComparativeTabs from "../components/ComparativeTabs";
import ChartCard from "../components/ChartCard";
import VisualChart from "../components/VisualChart";

function ComparativeView() {
  const startTimeInputRef = useRef();
  const endTimeInputRef = useRef();

  return (
    <>
      <Header title="Comparative View">
        <TimeInput
          size="xs"
          label="Start time"
          ref={startTimeInputRef}
          rightSection={
            <ActionIcon onClick={() => startTimeInputRef.current.showPicker()}>
              <IconClock size="1rem" stroke={1.5} />
            </ActionIcon>
          }
        />
        <TimeInput
          size="xs"
          label="End time"
          ref={endTimeInputRef}
          rightSection={
            <ActionIcon onClick={() => endTimeInputRef.current.showPicker()}>
              <IconClock size="1rem" stroke={1.5} />
            </ActionIcon>
          }
        />
        <Button variant="light" color="violet" radius="md">
          Filter
        </Button>
        <Button variant="outline" color="violet" radius="md">
          Clear
        </Button>
      </Header>
      <ComparativeTabs />
      <main>
        <ChartCard title="Comparative Card">
          <VisualChart />
        </ChartCard>
      </main>
    </>
  );
}

export default ComparativeView;
