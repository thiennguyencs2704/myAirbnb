import React, { useRef, useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import Location from "./Location";
import Guests from "./Guests";
import { useClickAway } from "react-use";
import CheckInOut from "./CheckInOut";

export interface BookingDetailProps {
  showBookingForm?: boolean;
  selectedNav?: boolean;
}

const BookingDetail: React.FC<BookingDetailProps> = ({
  showBookingForm,
  selectedNav,
}) => {
  const bookingDetailRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handlerIsFocused = () => {
    setIsFocused(true);
  };

  useClickAway(bookingDetailRef, () => setIsFocused(false));

  return (
    <div
      ref={bookingDetailRef}
      className={`bookingInput-Container ${isFocused ? "bg-gray-100" : ""} ${
        showBookingForm
          ? "semilg:w-[850px] w-9/10 transform duration-150 ease-out space-x-[1px]"
          : "lg:w-80 md:w-64 h-12 transform ease-in whitespace-nowrap lg:-ml-0 -ml-32 -translate-y-16 duration-150"
      }`}
    >
      <div className={`${selectedNav ? "w-1/4" : "w-1/2"} h-full`}>
        <Location
          focusBookingDetail={handlerIsFocused}
          isFocused={isFocused}
          showBookingForm={showBookingForm}
          selectedNav={selectedNav}
        />
      </div>

      <div className={`${selectedNav ? "w-2/5" : "w-1/2"} h-full`}>
        <CheckInOut
          focusBookingDetail={handlerIsFocused}
          isFocused={isFocused}
          showBookingForm={showBookingForm}
          selectedNav={selectedNav}
        />
      </div>

      <div className={`${selectedNav ? "w-7/20 h-full" : "hidden"}`}>
        <Guests
          focusBookingDetail={handlerIsFocused}
          isFocused={isFocused}
          showBookingForm={showBookingForm}
        />
      </div>

      {/* Search button */}
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

export default BookingDetail;
