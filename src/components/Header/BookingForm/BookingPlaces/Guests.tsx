import React, { useEffect, useRef, useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { useClickAway } from "react-use";
import { BookingInputDetailProps } from "./Location";
import GuestInput from "./GuestInput";
import { XIcon } from "@heroicons/react/solid";

interface GuestProps extends BookingInputDetailProps {
  isFocused: boolean;
}

const Guests: React.FC<GuestProps> = ({
  isScrolled,
  focusBookingPlaces,
  isFocused,
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
      onClick={focusBookingPlaces}
      className="relative flex items-center justify-between h-full rounded-full w-7/20"
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
          <button
            onClick={handlerClearGuest}
            className="absolute flex items-center justify-center z-20 w-[26px] h-[26px] text-base bg-[#f0f0f0] rounded-full top-[17px] lg:right-32 md:right-[100px]"
            type="button"
          >
            <XIcon className="w-[14px] h-[14px]" />
          </button>
        )}

        {focusGuests && (
          <div
            className={`absolute mt-3 right-0 w-[395px] h-[245px] bg-white rounded-[30px] grid grid-rows-3 px-10 items-center py-2 ${
              isScrolled ? "hidden" : ""
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

      <button
        type="button"
        className={`bookingSearchBtn-Before bookingSearchBtn ${
          isFocused ? "lg:w-[110px] md:w-[84px]" : "w-[48px]"
        }`}
      >
        <SearchIcon
          className={`z-20 w-5 h-5 ${isFocused ? "w-[18px] h-[18px]" : ""}`}
        />
        <p
          className={`lg:ml-[6px] ml-[2px] text-sm lg:text-base font-medium z-20 ${
            isFocused ? "inline" : "hidden"
          }`}
        >
          Search
        </p>
      </button>
    </div>
  );
};

export default Guests;
