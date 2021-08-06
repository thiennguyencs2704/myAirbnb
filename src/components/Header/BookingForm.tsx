import React from "react";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/solid";
import { GlobeAltIcon, MenuIcon, SearchIcon } from "@heroicons/react/outline";

interface BookingFormProps {
  isScrolled: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({ isScrolled }) => {
  return (
    <div
      className={`flex items-center w-full h-20  max-w-screen-2xl ${
        isScrolled ? "text-gray-900" : "text-white"
      }`}
    >
      <div className="z-20 pl-10 xl:pl-16">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
          }
          width={130}
          height={40}
          objectFit="contain"
          layout="fixed"
        />
      </div>

      <div
        className={`hidden md:inline fixed top-[17px] z-30 self-center h-12 md:-ml-48 lg:-ml-40 left-1/2 bookingInputContainer lg:w-80 md:w-64 transition-opacity ${
          isScrolled
            ? "opacity-1 transition-opacity ease-out delay-150"
            : "opacity-0"
        }`}
      >
        <button className="flex items-center justify-between w-full h-full">
          <p className="ml-6 text-[15px] font-medium">Start your search</p>
          <div className="flex items-center justify-center w-9 h-9 bg-[#E42E59] rounded-full mr-2">
            <SearchIcon className="flex items-center w-5 h-5 text-white" />
          </div>
        </button>
      </div>

      <div
        className={`relative w-full self-start lg:top-0 ${
          isScrolled
            ? "top-0 duration-200 ease-in opacity-0"
            : "md:top-16 duration-200"
        }`}
      >
        <form className="fixed left-0 flex flex-col items-center justify-center w-full">
          <div className="flex h-20 space-x-6 whitespace-nowrap">
            <button>
              <p>Places to stay</p>
            </button>
            <button>
              <p>Experiences</p>
            </button>
            <button>
              <p>Online Experiences</p>
            </button>
          </div>

          <div
            className={`bookingInputContainer ${
              isScrolled
                ? "lg:w-80 md:w-64 h-12 transform  lg:-ml-0 -ml-32 -mt-16 duration-200"
                : "w-9/10 transform duration-200"
            }`}
          >
            <div className="relative pl-6 w-7/30 bookingInputDetail">
              <div className="absolute right-0 w-full border-r border-gray-300 h-7 top-4" />
              <label htmlFor="location">Location</label>
              <input
                type="text"
                placeholder="Where are you going?"
                className="z-10 w-full pr-2 truncate bg-transparent outline-none hover:cursor-text"
              />
            </div>

            <div className="relative w-7/30 bookingInputDetail ">
              <div className="absolute right-0 w-full border-r border-gray-300 h-7 top-4" />
              <p>Check in</p>
              <p className="font-normal text-gray-400">Add dates</p>
            </div>

            <div className="relative w-7/30 bookingInputDetail">
              <div className="absolute right-0 w-full border-r border-gray-300 h-7 top-4" />
              <p>Check out</p>
              <p className="font-normal text-gray-400">Add dates</p>
            </div>

            <div className="relative flex items-center justify-between h-full w-3/10">
              <div className="flex flex-col justify-center w-full h-full pl-5 rounded-full hover:bg-gray-200 hover:cursor-pointer">
                <p>Check guests</p>
                <p className="items-center font-normal text-gray-400">
                  Add guests
                </p>
              </div>

              <button className="absolute bg-[#E42E59] h-12 w-12 rounded-full flex items-center justify-center text-white right-2">
                <SearchIcon className="w-7 h-7" />
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="z-20 flex items-center pr-10 space-x-6 xl:pr-16 whitespace-nowrap">
        <button>
          <p>Become a host</p>
        </button>
        <GlobeAltIcon className="w-5 h-5" />

        <div className="h-[42px] w-[77px] flex items-center justify-between border border-gray-300 shadow-md rounded-full text-gray-500 bg-white">
          <MenuIcon className="w-5 h-5 ml-2" />
          <UserCircleIcon className="h-9 w-9 mr-[6px]" />
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
