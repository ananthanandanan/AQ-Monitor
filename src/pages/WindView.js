// Showing a line graph of wind speed and direction
// Show the date and day of the week.

import { DateInput } from "@mantine/dates";
import { Button } from "@mantine/core";
import { useState } from "react";
import Header from "../components/Header";

function WindyView() {
  const [value, setValue] = useState(null);
  return (
    <>
      <Header title="Windy View">
        <DateInput
          clearable
          valueFormat="DD/MM/YYYY HH:mm:ss"
          placeholder="Date input"
          value={value}
          onChange={(value) => setValue(value)}
        />
        <Button variant="light" color="violet" radius="md">
          Filter
        </Button>
      </Header>
      <main>
        {/* <ChartCard title="Comparative Card" /> */}
        <h1>Hello This is Windy</h1>
      </main>
    </>
  );
}

export default WindyView;
