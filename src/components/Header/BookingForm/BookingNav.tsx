import React from "react";

interface BookingNavProps {
  onSelectPlaces: (e: { preventDefault: () => void }) => void;
  onSelectExperiences: (e: { preventDefault: () => void }) => void;
  selectedNav: boolean;
  showBookingForm: boolean;
  isScrolled: boolean;
}

const BookingNav: React.FC<BookingNavProps> = ({
  onSelectPlaces,
  onSelectExperiences,
  selectedNav,
  showBookingForm,
  isScrolled,
}) => {
  return (
    <div
      className={`flex items-center h-20 whitespace-nowrap ${
        showBookingForm ? "" : "invisible"
      }`}
    >
      <button type="button" onClick={onSelectPlaces} className="relative p-3">
        <span
          className={`bookingNav ${
            selectedNav
              ? isScrolled
                ? "after:border-gray-800"
                : "after:border-white"
              : isScrolled
              ? "after:border-transparent bookingNavHover-black"
              : "after:border-transparent bookingNavHover-white"
          }`}
        >
          Places to stay
        </span>
      </button>

      <button
        type="button"
        onClick={onSelectExperiences}
        className="relative p-3"
      >
        <span
          className={`bookingNav ${
            !selectedNav
              ? isScrolled
                ? "after:border-gray-800"
                : "after:border-white"
              : isScrolled
              ? "after:border-transparent bookingNavHover-black"
              : "after:border-transparent bookingNavHover-white"
          }`}
        >
          Experiences
        </span>
      </button>

      <button type="button" className="relative p-3">
        <span
          className={`bookingNav ${
            isScrolled
              ? "after:border-transparent bookingNavHover-black"
              : "after:border-transparent bookingNavHover-white"
          }`}
        >
          Online Experiences
        </span>
      </button>
    </div>
  );
};

export default BookingNav;
