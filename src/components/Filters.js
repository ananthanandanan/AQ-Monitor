import { useState, useRef } from "react";
import { ActionIcon } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { format, set } from "date-fns";

function Filters({ filterTime, filterDate, onFilter, onClear, defaultDate }) {
  const startTimeInputRef = useRef();
  const endTimeInputRef = useRef();
  const [dateValue, setDateValue] = useState();

  const onfilterTime = () => {
    let startTime = startTimeInputRef.current.value;
    let endTime = endTimeInputRef.current.value;
    startTime = startTime ? startTimeInputRef.current.value : "00:00";
    endTime = endTime ? endTimeInputRef.current.value : "23:59";

    if (!dateValue) {
      window.confirm("Please select a date");
      return;
    }

    if (!startTime && !endTime) {
      onFilter({ type: "FILTER_DATE", date: dateValue.toDateString() });
    }
    if (startTime || endTime) {
      const onFormattedDate = format(dateValue, "yyyy-MM-dd");
      // combine onFormattedDate and startTime
      const startTimeDate = new Date(`${onFormattedDate}T${startTime}`);
      const endTimeDate = new Date(`${onFormattedDate}T${endTime}`);

      //
      console.log("THe date ", onFormattedDate, startTimeDate, endTimeDate);

      onFilter({
        type: "FILTER_DATE_AND_TIME",
        date: dateValue.toDateString(),
        startTime: startTimeDate.getTime(),
        endTime: endTimeDate.getTime(),
      });
    }
  };
  return (
    <>
      {filterDate && (
        <DateInput
          size="xs"
          label="Date Input"
          valueFormat="DD/MM/YYYY"
          placeholder="Date input"
          value={dateValue}
          onChange={(value) => setDateValue(value)}
        />
      )}
      {filterTime && (
        <>
          <TimeInput
            size="xs"
            label="Start time"
            ref={startTimeInputRef}
            rightSection={
              <ActionIcon
                onClick={() => startTimeInputRef.current.showPicker()}
              >
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
        </>
      )}
      <Button onClick={onfilterTime} variant="light" color="violet" radius="md">
        Filter
      </Button>
      <Button onClick={onClear} variant="outline" color="violet" radius="md">
        Clear
      </Button>
    </>
  );
}

export default Filters;
