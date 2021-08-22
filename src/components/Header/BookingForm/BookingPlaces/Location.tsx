import React, { useRef, useState } from "react";

import Link from "next/link";
import { useClickAway } from "react-use";
import { BookingPlacesProps } from "./BookingPlaces";
import { XIcon } from "@heroicons/react/solid";

export interface BookingInputDetailProps extends BookingPlacesProps {
  focusBookingPlaces: () => void;
  isFocused: boolean;
}

const Location: React.FC<BookingInputDetailProps> = ({
  isScrolled,
  isFocused,
  focusBookingPlaces,
}) => {
  const locationRef = useRef<HTMLInputElement>(null);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const [focusLocation, setFocusLocation] = useState(false);
  const [locationSearch, setLocationSearch] = useState<string>("");

  const handlerLocationClick = () => {
    locationRef.current?.focus();
    locationInputRef.current?.focus();
    setFocusLocation(true);
  };

  useClickAway(locationRef, () => {
    setFocusLocation(false);
  });

  const handlerClearLocation = () => {
    setLocationSearch("");
    locationInputRef.current?.focus();
  };

  return (
    <div
      onClick={focusBookingPlaces}
      ref={locationRef}
      className="w-1/4 h-full"
    >
      <div className="relative flex w-full h-full">
        <button
          type="button"
          onClick={handlerLocationClick}
          className={`pl-8 bookingInput-Detail bookingInput-Detail-After ${
            focusLocation
              ? "bookingInput-DetailFocus after:border-gray-100 after:z-20"
              : `${
                  isFocused
                    ? "hover:after:border-gray-100"
                    : "hover:after:border-white"
                }`
          }`}
        >
          <label htmlFor="location">Location</label>
          <input
            id="location"
            autoComplete="off"
            ref={locationInputRef}
            type="text"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
            placeholder="Where are you going?"
            className="z-10 w-full pr-2 truncate bg-transparent outline-none hover:cursor-text removeInputWebkit"
          />
        </button>

        {locationSearch.length > 0 && focusLocation && (
          <button
            onClick={handlerClearLocation}
            className="absolute flex items-center justify-center z-20 w-[26px] h-[26px] text-base bg-[#f0f0f0] rounded-full right-4 top-[17px]"
            type="button"
          >
            <XIcon className="w-[14px] h-[14px]" />
          </button>
        )}
      </div>

      {focusLocation && (
        <div
          className={`absolute flex flex-col justify-center space-y-5 top-[76px] bg-white h-[160px] w-[500px] rounded-[32px] ${
            isScrolled ? "hidden" : ""
          }`}
        >
          <h1 className="w-10/12 mx-auto text-xs font-semibold">
            GO ANYWHERE, ANYTIME
          </h1>
          <Link href="/">
            <a>
              <div className="flex items-center justify-between w-10/12 mx-auto shadow-lg border border-gray-300 h-14 rounded-[30px] px-6 pb-1">
                <p className="text-xl font-medium text-[#ad68c3]">
                  {"I'm flexible"}
                </p>

                <video
                  autoPlay
                  style={{ width: "24px", height: "24px" }}
                  src="https://a0.muscache.com/v/3d/fc/3dfc1c47-7bfb-5a3b-a969-ed42ae03c901/3dfc1c477bfb5a3ba969ed42ae03c901_200k_1.mp4?impolicy=low_quality"
                ></video>
              </div>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Location;
