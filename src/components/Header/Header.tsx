import useHeaderState from "../../hooks/useHeaderState";
import Banner from "./Banner/Banner";
import BookingForm from "./BookingForm/BookingForm";

const Header = () => {
  const isScrolled = useHeaderState();

  // import React, { useEffect, useRef } from "react";
  // const renderCount = useRef(1);
  // useEffect(() => {
  //   renderCount.current += 1;
  //   console.log("Render times:", renderCount.current);
  // });

  return (
    <header className="w-full">
      <div className="fixed left-0 z-10 flex justify-center w-full">
        <div
          className={`absolute z-10 w-full h-20 ${
            isScrolled
              ? "bg-white duration-200"
              : "bg-gradient-to-b from-gray-900 to-transparent"
          }`}
        />
        <BookingForm isScrolled={isScrolled} />
      </div>
      <div>
        <Banner />
      </div>
    </header>
  );
};

export default Header;
