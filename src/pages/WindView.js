// Showing a line graph of wind speed and direction
// Show the date and day of the week.

import { useRef } from "react";
import { ActionIcon } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";

import Header from "../components/Header";

function WindyView() {
  const startTimeInputRef = useRef();
  const endTimeInputRef = useRef();
  return (
    <>
      <Header title="Windy View">
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
      </Header>
      <main>
        {/* <ChartCard title="Comparative Card" /> */}
        <h1>Hello This is Windy</h1>
      </main>
    </>
  );
}

export default WindyView;
