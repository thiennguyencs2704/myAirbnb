import { XIcon } from "@heroicons/react/solid";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { FocusedInputShape } from "react-dates";
import { useClickAway } from "react-use";
import CheckInOutCalendar, { HandleDatesChange } from "./CheckInOutCalendar";
import { BookingInputDetailProps } from "./Location";

interface CheckInOutProps extends BookingInputDetailProps {
  isFocused: boolean;
}

const CheckInOut: React.FC<CheckInOutProps> = ({
  isScrolled,
  isFocused,
  focusBookingPlaces,
}) => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [focusCheckIn, setFocusCheckIn] = useState(false);
  const [focusCheckOut, setFocusCheckOut] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [checkInDate, setCheckInDate] = useState<moment.Moment | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<moment.Moment | null>(null);
  const [focusedDateInput, setFocusedDateInput] =
    useState<FocusedInputShape | null>(null);

  const handlerCheckInClick = () => {
    setFocusCheckIn(true);
    setFocusCheckOut(false);
    setShowCalendar(true);
    setFocusedDateInput("startDate");
  };
  const handlerCheckOutClick = () => {
    setFocusCheckOut(true);
    setFocusCheckIn(false);
    setShowCalendar(true);
    setFocusedDateInput("endDate");
  };

  useClickAway(calendarRef, () => {
    setFocusCheckIn(false);
    setFocusCheckOut(false);
    setShowCalendar(false);
    setFocusedDateInput(null);
  });

  useEffect(() => {
    if (focusedDateInput === "startDate") handlerCheckInClick();
    if (focusedDateInput === "endDate") handlerCheckOutClick();
  }, [focusedDateInput]);

  const handlerFocusChange = (focusedDateInput: FocusedInputShape | null) =>
    setFocusedDateInput(focusedDateInput);

  const handlerClearDate = () => {
    setCheckInDate(null);
    setCheckOutDate(null);
  };

  const handlerUpdateBookingDate = ({
    startDate,
    endDate,
  }: HandleDatesChange) => {
    setCheckInDate(startDate);
    setCheckOutDate(endDate);
  };

  // const renderCount = useRef(1);
  // useEffect(() => {
  //   renderCount.current += 1;
  //   console.log("Render times:", renderCount.current);
  // });

  return (
    <div
      ref={calendarRef}
      onClick={focusBookingPlaces}
      className="flex items-center w-2/5 h-full space-x-[1px]"
    >
      {/* checkIn button */}
      <div className="relative flex w-1/2 h-full rounded-full">
        <button
          type="button"
          onClick={handlerCheckInClick}
          className={`relative bookingInput-Detail bookingInput-Detail-Before bookingInput-Detail-After  ${
            focusCheckIn
              ? "bookingInput-DetailFocus before:border-gray-100 after:border-gray-100 after:z-20"
              : `${
                  isFocused
                    ? "hover:before:border-gray-100 hover:after:border-gray-100"
                    : "hover:before:border-white hover:after:border-white"
                }`
          }`}
        >
          <p>Check in</p>
          <p
            className={`${
              checkInDate
                ? "text-gray-600 font-medium"
                : "font-normal text-gray-400"
            }`}
          >
            {checkInDate ? moment(checkInDate).format("MMM D") : "Add dates"}
          </p>
        </button>

        {focusCheckIn && checkInDate && (
          <button
            onClick={handlerClearDate}
            className="absolute flex items-center justify-center z-20 w-[26px] h-[26px] text-base bg-[#f0f0f0] rounded-full right-4 top-[17px]"
            type="button"
          >
            <XIcon className="w-[14px] h-[14px]" />
          </button>
        )}
      </div>

      {/* checkOut button */}
      <div className="relative flex w-1/2 h-full rounded-full">
        <button
          type="button"
          onClick={handlerCheckOutClick}
          className={`relative bookingInput-Detail bookingInput-Detail-Before bookingInput-Detail-After ${
            focusCheckOut
              ? "bookingInput-DetailFocus before:border-gray-100 after:border-gray-100 before:z-20"
              : `${
                  isFocused
                    ? "hover:before:border-gray-100 hover:after:border-gray-100"
                    : "hover:before:border-white hover:after:border-white"
                }`
          }`}
        >
          <p>Check out</p>
          <p
            className={`${
              checkOutDate
                ? "text-gray-600 font-medium"
                : "font-normal text-gray-400"
            }`}
          >
            {checkOutDate ? moment(checkOutDate).format("MMM D") : "Add dates"}
          </p>
        </button>

        {focusCheckOut && checkOutDate && (
          <button
            onClick={handlerClearDate}
            className="absolute flex items-center justify-center z-20 w-[26px] h-[26px] text-base bg-[#f0f0f0] rounded-full right-4 top-[17px]"
            type="button"
          >
            <XIcon className="w-[14px] h-[14px]" />
          </button>
        )}
      </div>

      {/* Calendar */}
      <div
        className={`absolute left-0 w-full flex flex-col items-center top-20 
        ${isScrolled ? "hidden" : ""}
        ${showCalendar ? "" : "hidden"}`}
      >
        <CheckInOutCalendar
          focusedDateInput={focusedDateInput}
          onFocusChange={handlerFocusChange}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          handlerUpdateBookingDate={handlerUpdateBookingDate}
        />
      </div>
    </div>
  );
};

export default CheckInOut;
