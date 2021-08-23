import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { BookingDetailProps } from "./BookingDetail";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Image from "next/image";
import PlacesAutocomplete from "react-places-autocomplete";
import Link from "next/link";
import ClearDataButton from "../../../UI/ClearDataButton";

export interface BookingInputDetailProps extends BookingDetailProps {
  focusBookingDetail: () => void;
  isFocused: boolean;
}

const Location: React.FC<BookingInputDetailProps> = ({
  isFocused,
  focusBookingDetail,
  showBookingForm,
  selectedNav,
}) => {
  const locationRef = useRef<HTMLInputElement>(null);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const [location, setLocation] = useState("");
  const [focusLocation, setFocusLocation] = useState(false);

  const handlerLocationClick = () => {
    // locationRef.current?.focus();
    locationInputRef.current?.focus();
    setFocusLocation(true);
  };

  useClickAway(locationRef, () => {
    setFocusLocation(false);
  });

  const handlerClearLocation = () => {
    setLocation("");
    locationInputRef.current?.focus();
  };

  return (
    <div
      onClick={focusBookingDetail}
      ref={locationRef}
      className="relative flex w-full h-full"
    >
      <button
        type="button"
        onClick={handlerLocationClick}
        className={`relative pl-8 bookingInput-Detail bookingInput-Detail-After ${
          focusLocation
            ? "bookingInput-DetailFocus after:border-gray-100 after:z-20"
            : `${
                isFocused
                  ? "hover:after:border-gray-100"
                  : "hover:after:border-white"
              }`
        }`}
      >
        <PlacesAutocomplete
          value={location}
          onChange={setLocation}
          onSelect={setLocation}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <>
              <label htmlFor="location">Location</label>
              <input
                id="location"
                ref={locationInputRef}
                {...getInputProps({ placeholder: "Where are you going?" })}
                className="z-10 w-full pr-2 truncate bg-transparent outline-none hover:cursor-text removeInputWebkit"
              />

              {/* Popup for search suggestion  */}
              {focusLocation && suggestions.length > 0 && (
                <div className="absolute z-40 text-black bg-white top-[76px] w-[500px] h-auto left-0 rounded-[32px] py-5">
                  {suggestions.map((suggestion) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div
                        // key={suggestion.id}
                        {...getSuggestionItemProps(suggestion)}
                        className="flex items-center w-full h-16 px-5 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                      >
                        <div className="flex items-center justify-center h-12 bg-gray-100 border border-gray-200 rounded-lg w-14">
                          <LocationMarkerIcon className="w-5 h-5 overflow-auto text-gray-700" />
                        </div>
                        <p className="flex items-center w-full h-full ml-3 truncate ">
                          {suggestion.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </PlacesAutocomplete>
      </button>

      {focusLocation && location.length === 0 && (
        <div
          className={`absolute flex flex-col left-0 justify-center space-y-5 top-[76px] bg-white rounded-[32px] transform-none shadow-xl ${
            showBookingForm
              ? "w-[500px] h-auto py-5 duration-100"
              : "w-0 h-0 invisible"
          }`}
        >
          {/* Popup for booking location */}
          {selectedNav && (
            <>
              <h1 className="flex w-10/12 mx-auto mt-3 text-xs font-semibold">
                GO ANYWHERE, ANYTIME
              </h1>
              <Link href="/">
                <a>
                  <div className="flex items-center justify-between w-10/12 mx-auto shadow-lg border border-gray-300 h-14 rounded-[30px] px-6 pb-1 mb-4">
                    <p className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8d2cad] via-[#ac1985] to-[#da7c46]">
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
            </>
          )}

          {/* Popup for booking experiences */}
          {!selectedNav && (
            <Link href="/">
              <a>
                <div className="flex items-center w-[498px] hover:bg-gray-100 pl-8 h-14 [30px] pb-1 ml-[1px] rounded-lg pt-1">
                  <Image
                    src={
                      "https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&im_q=lowq"
                    }
                    height={48}
                    width={48}
                    objectFit="contain"
                    className="rounded-lg"
                    quality={100}
                  />
                  <p className="ml-3 text-lg font-normal">Nearby</p>
                </div>
              </a>
            </Link>
          )}
        </div>
      )}

      {/* Clear Button */}
      {focusLocation && location.length > 0 && (
        <ClearDataButton handlerClearData={handlerClearLocation} />
      )}
    </div>
  );
};

export default Location;
