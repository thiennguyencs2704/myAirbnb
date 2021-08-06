import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import BookingForm from "./BookingForm";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handlerScrollY = () => {
      setScrollY(window.scrollY);
      if (scrollY >= 20) {
        setIsScrolled(true);
      }
      if (scrollY < 10) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handlerScrollY);
    return () => {
      window.removeEventListener("scroll", handlerScrollY);
    };
  }, [isScrolled, scrollY]);

  return (
    <header className="w-full">
      <div className="fixed left-0 z-10 flex justify-center w-full">
        <div
          className={`absolute w-full h-20 ${
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
