import React from "react";

interface BookingNavProps {
  onSelectPlaces: (e: { preventDefault: () => void }) => void;
  onSelectExperiences: (e: { preventDefault: () => void }) => void;
  selectedNav: boolean;
  showBookingForm: boolean;
}

const BookingNav: React.FC<BookingNavProps> = ({
  onSelectPlaces,
  onSelectExperiences,
  selectedNav,
  showBookingForm,
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
              ? "after:border-white"
              : "after:border-transparent bookingNavHover"
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
              ? "after:border-white"
              : "after:border-transparent bookingNavHover"
          }`}
        >
          Experiences
        </span>
      </button>

      <button type="button" className="relative p-3">
        <span className="bookingNavHover bookingNav after:border-transparent">
          Online Experiences
        </span>
      </button>
    </div>
  );
};

export default BookingNav;
