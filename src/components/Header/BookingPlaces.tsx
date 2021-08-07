import React, { useRef } from "react";
import { SearchIcon } from "@heroicons/react/outline";

interface BookingPlacesProps {
  isScrolled: boolean;
}

const BookingPlaces: React.FC<BookingPlacesProps> = ({ isScrolled }) => {
  const placeInputRef = useRef<HTMLInputElement>(null);

  const handlerPlaceClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    placeInputRef.current?.focus();
  };

  return (
    <div
      className={`bookingInputContainer focus-within:bg-gray-100 ${
        isScrolled
          ? "lg:w-80 md:w-64 h-12 transform whitespace-nowrap lg:-ml-0 -ml-32 -mt-16 duration-200"
          : "w-9/10 transform duration-200"
      }`}
    >
      <button
        onClick={handlerPlaceClick}
        className="relative pl-8 w-3/10 bookingInputDetail focus-within:bg-white focus-within:shadow-xl "
      >
        <div className="absolute right-0 w-full border-r border-gray-300 h-7 top-4" />
        <label htmlFor="location">Location</label>
        <input
          id="location"
          ref={placeInputRef}
          type="text"
          placeholder="Where are you going?"
          className="z-10 w-full pr-2 truncate bg-transparent outline-none hover:cursor-text"
        />
      </button>

      <button
        onClick={(e) => e.preventDefault()}
        className="relative w-1/5 bookingInputDetail bookingInputDetailFocus"
      >
        <div className="absolute right-0 w-full border-r border-gray-300 h-7 top-4" />
        <p>
          <span>Check in</span>
        </p>
        <p className="font-normal text-gray-400">Add dates</p>
      </button>

      <button
        onClick={(e) => e.preventDefault()}
        className="relative w-1/5 bookingInputDetail bookingInputDetailFocus"
      >
        <div className="absolute right-0 w-full border-r border-gray-300 h-7 top-4" />
        <p>Check out</p>
        <p className="font-normal text-gray-400">Add dates</p>
      </button>

      <div className="relative flex items-center justify-between h-full w-3/10">
        <button
          onClick={(e) => e.preventDefault()}
          className="w-full bookingInputDetail bookingInputDetailFocus"
        >
          <p>Check guests</p>
          <p className="items-center font-normal text-gray-400">Add guests</p>
        </button>

        <button
          onClick={(e) => e.preventDefault()}
          className="absolute bg-[#E42E59] h-12 w-12 rounded-full flex items-center justify-center text-white right-2"
        >
          <SearchIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default BookingPlaces;
