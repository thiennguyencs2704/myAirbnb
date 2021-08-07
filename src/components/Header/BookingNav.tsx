import React from "react";

interface BookingNavProps {
  onSelectPlaces: (e: { preventDefault: () => void }) => void;
  onSelectExperiences: (e: { preventDefault: () => void }) => void;
  selectedNav: boolean;
}

const BookingNav: React.FC<BookingNavProps> = ({
  onSelectPlaces,
  onSelectExperiences,
  selectedNav,
}) => {
  return (
    <div className="flex items-center h-20 whitespace-nowrap">
      <button onClick={onSelectPlaces} className="relative p-3">
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

      <button onClick={onSelectExperiences} className="relative p-3">
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

      <button onClick={(e) => e.preventDefault()} className="relative p-3">
        <span className="bookingNavHover bookingNav after:border-transparent">
          Online Experiences
        </span>
      </button>
    </div>
  );
};

export default BookingNav;