import moment from "moment";
import React, { FC, useEffect, useRef, useState } from "react";
import { FocusedInputShape } from "react-dates";
import { useClickAway } from "react-use";
import ClearDataButton from "../../../UI/ClearDataButton";
import { BookingInputDetailProps } from "./BookingDetail";
import CheckInOutCalendar, { HandlerDatesChange } from "./CheckInOutCalendar";

const CheckInOut: FC<BookingInputDetailProps> = ({
  isFocused,
  focusBookingDetail,
  showBookingForm,
  selectedNav,
}) => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [focusCheckIn, setFocusCheckIn] = useState(false);
  const [focusCheckOut, setFocusCheckOut] = useState(false);
  const [focusDate, setFocusDate] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [checkInDate, setCheckInDate] = useState<moment.Moment | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<moment.Moment | null>(null);
  const [focusedDateInput, setFocusedDateInput] =
    useState<FocusedInputShape | null>(null);

  const handlerCheckInClick = () => {
    setFocusCheckIn(true);
    setFocusCheckOut(false);
    setShowCalendar(true);
    setFocusDate(true);
    setFocusedDateInput("startDate");
  };
  const handlerCheckOutClick = () => {
    setFocusCheckOut(true);
    setFocusCheckIn(false);
    setFocusDate(true);
    setShowCalendar(true);
    setFocusedDateInput("endDate");
  };
  const handlerDateClick = () => {
    setFocusDate(true);
    setShowCalendar(true);
    if (focusedDateInput === "startDate") setFocusedDateInput("startDate");
    if (focusedDateInput === "endDate") setFocusedDateInput("endDate");
    if (!checkInDate && !checkOutDate) setFocusedDateInput("startDate");
  };

  useClickAway(calendarRef, () => {
    setFocusCheckIn(false);
    setFocusCheckOut(false);
    setShowCalendar(false);
    setFocusDate(false);
  });

  useEffect(() => {
    if (focusedDateInput === "startDate" && checkInDate === null)
      handlerCheckInClick();
    if (focusedDateInput === "endDate" && checkOutDate === null)
      handlerCheckOutClick();
  }, [focusedDateInput, checkInDate, checkOutDate]);

  const handlerFocusChange = (focusedDateInput: FocusedInputShape | null) =>
    setFocusedDateInput(focusedDateInput);

  const handlerClearDate = () => {
    setCheckInDate(null);
    setCheckOutDate(null);
    setFocusedDateInput("startDate");
  };

  const handlerUpdateBookingDate = ({
    startDate,
    endDate,
  }: HandlerDatesChange) => {
    setCheckInDate(startDate);
    setCheckOutDate(endDate);
  };

  return (
    <div
      ref={calendarRef}
      onClick={focusBookingDetail}
      className="w-full h-full"
    >
      {/* Booking Places */}
      {selectedNav ? (
        <div className="flex items-center w-full h-full space-x-[1px]">
          {/* checkIn button */}
          <div className="relative flex w-1/2 h-full rounded-full">
            <button
              type="button"
              onClick={handlerCheckInClick}
              className={`relative bookingInput-Detail bookingInput-Detail-Before bookingInput-Detail-After  ${
                focusCheckIn
                  ? "bookingInput-DetailFocus before:border-gray-100 after:border-gray-100 before:z-20 after:z-20"
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
                {checkInDate
                  ? moment(checkInDate).format("MMM D")
                  : "Add dates"}
              </p>
            </button>

            {focusCheckIn && checkInDate && (
              <ClearDataButton handlerClearData={handlerClearDate} />
            )}
          </div>

          {/* checkOut button */}
          <div className="relative flex w-1/2 h-full rounded-full">
            <button
              type="button"
              onClick={handlerCheckOutClick}
              className={`relative bookingInput-Detail bookingInput-Detail-Before bookingInput-Detail-After ${
                focusCheckOut
                  ? "bookingInput-DetailFocus before:border-gray-100 after:border-gray-100 after:z-20 before:z-20"
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
                {checkOutDate
                  ? moment(checkOutDate).format("MMM D")
                  : "Add dates"}
              </p>
            </button>

            {focusCheckOut && checkOutDate && (
              <ClearDataButton handlerClearData={handlerClearDate} />
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Booking Experiences */}
          <div
            onClick={handlerDateClick}
            className={`relative bookingInput-Detail bookingInput-Detail-Before ${
              focusDate
                ? "bookingInput-DetailFocus before:border-gray-100 before:z-20"
                : `${
                    isFocused
                      ? "hover:before:border-gray-100"
                      : "hover:before:border-white"
                  }`
            }`}
          >
            <p>Date</p>

            {/* If no check-in/out date */}
            {!checkInDate && !checkOutDate && (
              <p className="font-normal text-gray-400">
                Add when you want to go
              </p>
            )}

            {/* If check-in/out date selected */}
            {(checkInDate || checkOutDate) && (
              <p>
                <span
                  className={`${
                    checkInDate ? "" : "font-normal text-gray-500"
                  }`}
                >
                  {`${
                    checkInDate
                      ? moment(checkInDate).format("MMM D")
                      : "Start Date"
                  }`}
                </span>{" "}
                -{" "}
                <span
                  className={`${
                    checkOutDate ? "" : "font-normal text-gray-500"
                  }`}
                >
                  {`${
                    checkOutDate
                      ? moment(checkOutDate).format("MMM D")
                      : "End Date"
                  }`}
                </span>
              </p>
            )}
          </div>

          {/* Clear Data Button */}
          {focusDate && (checkInDate || checkOutDate) && (
            <ClearDataButton
              handlerClearData={handlerClearDate}
              style={"lg:right-32 md:right-[100px]"}
            />
          )}
        </>
      )}

      {/* Calendar */}
      <div
        className={`absolute left-1/2 right-1/2 flex flex-col items-center top-20
        ${showBookingForm ? "" : "hidden"}
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
