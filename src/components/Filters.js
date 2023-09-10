import { useState, useRef } from "react";
import { ActionIcon } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { format } from "date-fns";

/**
 * Filters is a component that is used to display the filters for Date and Time.
 *
 * @param {Object} props
 * @param {boolean} props.filterTime - Whether to display the time filter or not
 * @param {boolean} props.filterDate - Whether to display the date filter or not
 * @param {function} props.onFilter - Function to filter the data
 * @param {function} props.onClear - Function to clear the filter
 * @param {boolean} props.isWeekly - Whether to display the weekly filter or not
 *
 * @returns {JSX.Element}
 *
 */

function Filters({ filterTime, filterDate, onFilter, onClear, isWeekly }) {
  const startTimeInputRef = useRef();
  const endTimeInputRef = useRef();
  const [dateValue, setDateValue] = useState();

  const onfilterTime = () => {
    if (isWeekly) {
      onFilter({ type: "FILTER_DATE", date: dateValue });
      return;
    }
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

      onFilter({
        type: "FILTER_DATE_AND_TIME",
        date: dateValue.toDateString(),
        startTime: startTimeDate.getTime(),
        endTime: endTimeDate.getTime(),
      });
    }
  };

  const onClearTimeFilter = () => {
    onClear();
    setDateValue(null);
    if (isWeekly) {
      return;
    }
    startTimeInputRef.current.value = null;
    endTimeInputRef.current.value = null;
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
      <Button
        onClick={onClearTimeFilter}
        variant="outline"
        color="violet"
        radius="md"
      >
        Clear
      </Button>
    </>
  );
}

export default Filters;
