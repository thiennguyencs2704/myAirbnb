import React, { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { BookingInputDetailProps } from "./Location";
import GuestInput from "./GuestInput";
import ClearDataButton from "../../../UI/ClearDataButton";

interface GuestProps extends BookingInputDetailProps {
  isFocused: boolean;
}

const Guests: React.FC<GuestProps> = ({
  focusBookingDetail,
  isFocused,
  showBookingForm,
}) => {
  const guestRef = useRef<HTMLDivElement>(null);
  const [focusGuests, setFocusGuests] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [atLeastOneAdult, setAtLeastOneAdult] = useState(false);

  const handlerGuestClick = () => {
    setFocusGuests(true);
  };

  const handlerClearGuest = () => {
    setAdults(0);
    setChildren(0);
    setInfants(0);
  };

  useEffect(() => {
    if (adults < 2 && (children !== 0 || infants !== 0)) {
      setAdults(1);
      setAtLeastOneAdult(true);
    }
    if (adults >= 2 || (children === 0 && infants === 0)) {
      setAtLeastOneAdult(false);
    }
  }, [adults, children, infants]);

  const totalGuests = adults + children;

  const totalGuestText =
    (totalGuests > 0 ? `${totalGuests} guest` : "Add guests") +
    (totalGuests > 1 ? "s" : "");

  const totalInfantText =
    (infants > 0 ? `, ${infants} infant` : "") + (infants > 1 ? "s" : "");

  const totalInfo = totalGuestText + totalInfantText;

  useClickAway(guestRef, () => setFocusGuests(false));

  return (
    <div
      onClick={focusBookingDetail}
      className="relative flex items-center justify-between w-full h-full rounded-full"
    >
      <div ref={guestRef} className="w-full h-full">
        <button
          type="button"
          onClick={handlerGuestClick}
          className={`bookingInput-Detail bookingInput-Detail-Before ${
            focusGuests
              ? "bookingInput-DetailFocus before:border-gray-100 before:z-20"
              : `${
                  isFocused
                    ? "hover:before:border-gray-100"
                    : "hover:before:border-white"
                }`
          }`}
        >
          <p>Guests</p>
          <p
            className={`items-center ${
              adults !== 0
                ? "text-gray-600 font-medium"
                : "font-normal text-gray-400"
            }`}
          >
            {totalInfo}
          </p>
        </button>

        {adults !== 0 && focusGuests && (
          <ClearDataButton
            handlerClearData={handlerClearGuest}
            style={"lg:right-32 md:right-[100px]"}
          />
        )}

        {focusGuests && (
          <div
            className={`absolute mt-3 right-0 bg-white rounded-[30px] grid grid-rows-3 px-10 items-center py-2 ${
              showBookingForm
                ? "w-[395px] h-[245px] duration-100"
                : "w-0 h-0 invisible"
            }`}
          >
            <GuestInput
              title={"Adults"}
              age={"Ages 13 or above"}
              number={adults}
              updateNumber={setAdults}
              atLeastOneAdult={atLeastOneAdult}
            />
            <GuestInput
              title={"Children"}
              age={"Ages 2-12"}
              border={"border-t border-b border-gray-300"}
              number={children}
              updateNumber={setChildren}
            />
            <GuestInput
              title={"Infants"}
              age={"Under 2"}
              number={infants}
              updateNumber={setInfants}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Guests;
