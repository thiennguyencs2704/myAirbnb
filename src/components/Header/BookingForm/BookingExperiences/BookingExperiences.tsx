import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

interface BookingExperiencesProps {
  isScrolled: boolean;
}

const BookingExperiences: React.FC<BookingExperiencesProps> = ({
  isScrolled,
}) => {
  return (
    <div
      className={`bookingInput-Container ${
        isScrolled
          ? "lg:w-80 md:w-64 h-12 transform whitespace-nowrap lg:-ml-0 -ml-32 -mt-16 duration-200"
          : "w-9/10 transform duration-200"
      }`}
    >
      <div className="relative w-1/2 pl-8 bookingInputDetail">
        <div className="absolute right-0 w-full border-r border-gray-300 h-7 top-4" />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          placeholder="Where are you going?"
          className="z-10 w-full pr-2 truncate bg-transparent outline-none hover:cursor-text"
        />
      </div>

      <div className="relative flex items-center justify-between w-1/2 h-full">
        <div className="flex flex-col justify-center w-full h-full pl-6 rounded-full hover:bg-gray-200 hover:cursor-pointer">
          <p>Date</p>
          <p className="items-center font-normal text-gray-400">
            Add when you want to go
          </p>
        </div>

        <button className="absolute bg-[#E42E59] h-12 w-12 rounded-full flex items-center justify-center text-white right-2">
          <SearchIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default BookingExperiences;
