// Title left, filter - time range,
import { useRef } from "react";
import { ActionIcon, Button } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";

import Header from "../components/Header";

function OverlayView() {
  const startTimeInputRef = useRef();
  const endTimeInputRef = useRef();
  return (
    <>
      <Header title="Overlay View">
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
      <main>
        {/* <ChartCard title="Comparative Card" /> */}
        <h1>Hello This is overlay</h1>
      </main>
    </>
  );
}

export default OverlayView;
