import React, { useState } from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import AuthNav from "./AuthNav";
import BookingNav from "./BookingNav";
import BookingPlaces from "./BookingPlaces/BookingPlaces";
import Link from "next/link";
import BookingExperiences from "./BookingExperiences/BookingExperiences";

interface BookingFormProps {
  isScrolled: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({ isScrolled }) => {
  const [selectedNav, setSelectedNav] = useState(true);

  const handlerSelectPlaces = () => {
    setSelectedNav(true);
  };

  const handlerSelectExperiences = () => {
    setSelectedNav(false);
  };

  return (
    <div className="relative justify-center w-full mx-auto">
      <div className="absolute z-20 flex justify-center items-center h-[46px] text-black rounded-full hover:cursor-text md:hidden mt-5 w-11/12 mx-5 border bg-white border-gray-300 shadow-lg">
        <div className="flex items-center">
          <SearchIcon className="w-5 h-5 mr-1 text-pink-600" />
          <p className="text-[14px] text-gray-700 font-medium">
            Where are you going?
          </p>
        </div>
      </div>

      <div
        className={`hidden relative md:flex items-center justify-center mx-auto w-full h-20 max-w-screen-2xl ${
          isScrolled ? "text-gray-900" : "text-white"
        }`}
      >
        <div className="absolute z-30 left-12 xl:left-16">
          <Link href="/">
            <a>
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                }
                width={130}
                height={40}
                objectFit="contain"
                layout="fixed"
              />
            </a>
          </Link>
        </div>

        <div
          className={`hidden md:inline fixed top-[17px] self-center h-12 md:-ml-48 lg:-ml-40 left-1/2 bookingInput-Container lg:w-80 md:w-64 transition-opacity ${
            isScrolled
              ? "z-20 opacity-1 transition-opacity ease-out delay-150"
              : "z-0 opacity-0"
          }`}
        >
          <button
            type="button"
            className="flex items-center justify-between w-full h-full"
          >
            <p className="ml-6 text-[15px] font-medium">Start your search</p>
            <div className="flex items-center justify-center w-9 h-9 bg-[#E42E59] rounded-full mr-2">
              <SearchIcon className="flex items-center w-5 h-5 text-white" />
            </div>
          </button>
        </div>

        <div
          className={`absolute w-full self-start lg:top-0 ${
            isScrolled
              ? "z-0 top-0 duration-200 ease-in opacity-0"
              : "z-20 md:top-12 duration-200"
          }`}
        >
          <form
            className={`group absolute left-0 flex flex-col items-center justify-center w-full`}
          >
            <BookingNav
              onSelectPlaces={handlerSelectPlaces}
              onSelectExperiences={handlerSelectExperiences}
              selectedNav={selectedNav}
            />

            {selectedNav && <BookingPlaces isScrolled={isScrolled} />}
            {!selectedNav && <BookingExperiences isScrolled={isScrolled} />}
          </form>
        </div>

        <AuthNav />
      </div>
    </div>
  );
};

export default BookingForm;
