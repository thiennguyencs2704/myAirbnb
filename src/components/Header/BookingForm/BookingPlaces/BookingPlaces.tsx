import React, { useRef, useState } from "react";

import Location from "./Location";
import Guests from "./Guests";
import { useClickAway } from "react-use";
import CheckInOut from "./CheckInOut";

export interface BookingPlacesProps {
  isScrolled: boolean;
}

const BookingPlaces: React.FC<BookingPlacesProps> = ({ isScrolled }) => {
  const bookingPlacesRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handlerIsFocused = () => {
    setIsFocused(true);
  };

  useClickAway(bookingPlacesRef, () => setIsFocused(false));

  return (
    <div
      ref={bookingPlacesRef}
      className={`bookingInput-Container ${isFocused ? "bg-gray-100" : ""} ${
        isScrolled
          ? "lg:w-80 md:w-64 h-12 transform whitespace-nowrap lg:-ml-0 -ml-32 -mt-16 duration-200"
          : "w-9/10 transform duration-200 space-x-[1px]"
      }`}
    >
      <Location
        focusBookingPlaces={handlerIsFocused}
        isFocused={isFocused}
        isScrolled={isScrolled}
      />
      <CheckInOut
        focusBookingPlaces={handlerIsFocused}
        isFocused={isFocused}
        isScrolled={isScrolled}
      />
      <Guests
        focusBookingPlaces={handlerIsFocused}
        isFocused={isFocused}
        isScrolled={isScrolled}
      />
    </div>
  );
};

export default BookingPlaces;
