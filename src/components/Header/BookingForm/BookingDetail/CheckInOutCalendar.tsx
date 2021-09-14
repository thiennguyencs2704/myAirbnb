import React, { useEffect, useState } from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {
  DayPickerRangeController,
  FocusedInputShape,
  isInclusivelyAfterDay,
} from "react-dates";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

export interface HandlerDatesChange {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
}

interface CalendarProps {
  focusedDateInput: FocusedInputShape | null;
  onFocusChange: (focusedDateInput: FocusedInputShape | null) => void;
  checkInDate: moment.Moment | null;
  checkOutDate: moment.Moment | null;
  handlerUpdateBookingDate: ({
    startDate,
    endDate,
  }: HandlerDatesChange) => void;
}

const CheckInOutCalendar: React.FC<CalendarProps> = ({
  focusedDateInput,
  onFocusChange,
  checkInDate,
  checkOutDate,
  handlerUpdateBookingDate,
}) => {
  const [calendarToggle, setCalendarToggle] = useState(true);

  const handlerCalendarMode = () => {
    setCalendarToggle(true);
  };
  const handlerFlexibleMode = () => {
    setCalendarToggle(false);
  };

  const handlerDatesChange = ({ startDate, endDate }: HandlerDatesChange) => {
    handlerUpdateBookingDate({ startDate, endDate });
  };

  const getOutsideDateRange = (day: moment.Moment) => {
    const today = moment();
    return !isInclusivelyAfterDay(day, today);
  };

  return (
    <>
      <div className="flex w-[195px] h-[36px] absolute z-10 justify-between items-center rounded-full top-10 bg-[#eeeeee]">
        <button
          onClick={handlerCalendarMode}
          type="button"
          className={`w-1/2 ml-1 rounded-full h-5/6 ${
            calendarToggle ? "bg-white" : ""
          }`}
        >
          <p>Calendar</p>
        </button>

        <button
          onClick={handlerFlexibleMode}
          type="button"
          className={`w-1/2 mx-1 rounded-full h-5/6 ${
            !calendarToggle ? "bg-white" : ""
          }`}
        >
          <p>I{`'`}m flexible</p>
        </button>
      </div>

      <DayPickerRangeController
        startDate={checkInDate}
        endDate={checkOutDate}
        focusedInput={focusedDateInput}
        onDatesChange={handlerDatesChange}
        onFocusChange={onFocusChange}
        numberOfMonths={2}
        initialVisibleMonth={() => moment()}
        navPrev={
          <ChevronLeftIcon className="absolute self-center w-7 h-7 mx-2 mt-5 hover:bg-gray-200 hover:rounded-full pr-[2px]" />
        }
        navNext={
          <ChevronRightIcon className="absolute self-center w-7 h-7 mt-5 hover:bg-gray-200 hover:rounded-full pl-[2px] ml-1" />
        }
        keepOpenOnDateSelect
        isOutsideRange={getOutsideDateRange}
      />
    </>
  );
};

export default CheckInOutCalendar;
