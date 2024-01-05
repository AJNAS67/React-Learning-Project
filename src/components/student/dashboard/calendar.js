import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarFormProps() {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      style={{ width: "100% !important" }}
    >
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem>
          <DateCalendar defaultValue={dayjs("2023-12-28")} readOnly />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
