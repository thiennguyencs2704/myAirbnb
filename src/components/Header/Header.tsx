import useHeaderState from "../../hooks/useHeaderState";
import Banner from "./Banner/Banner";
import BookingForm from "./BookingForm/BookingForm";

const Header = () => {
  const {
    headerState: isScrolled,
    showBookingForm,
    setShowBookingForm,
  } = useHeaderState();

  return (
    <header className="w-full min-w-full">
      <div className="fixed left-0 z-10 flex justify-center w-full">
        <div
          className={`absolute z-10 w-full ${
            showBookingForm && isScrolled
              ? "h-44 duration-150"
              : "h-20 duration-150 ease-out"
          } 
          ${
            isScrolled
              ? "bg-white"
              : "bg-gradient-to-b from-gray-900 to-transparent transition-none"
          }
          `}
        />
        <BookingForm
          isScrolled={isScrolled}
          showBookingForm={showBookingForm}
          setShowBookingForm={setShowBookingForm}
        />
      </div>
      <div className="w-full">
        <Banner />
      </div>
    </header>
  );
};

export default Header;
