import React, { createContext, useEffect, useState } from "react";

export interface BookingInfo {
  location?: string | null;
  checkInDate?: string | null;
  checkOutDate?: string | null;
  guests?: number;
}

interface BookingContext {
  bookingInfo: BookingInfo;
  handlerUpdateBookingInfo: (info: BookingInfo) => void;
  handlerClearGuests: () => void;
}

export const BookingContext = createContext<BookingContext | null>(null);

const initialState: BookingInfo = {
  location: null,
  checkInDate: null,
  checkOutDate: null,
  guests: 0,
};

const BookingContextProvider: React.FC = ({ children }) => {
  const [bookingInfo, setBookingInfo] = useState(initialState);

  const handlerUpdateBookingInfo = (info: BookingInfo) => {
    setBookingInfo({ ...bookingInfo, ...info });
  };

  const handlerClearGuests = () => {
    setBookingInfo({ ...bookingInfo, guests: 0 });
  };

  useEffect(() => {
    console.log("Check current info", bookingInfo);
  }, [bookingInfo]);

  const contextValue: BookingContext = {
    bookingInfo,
    handlerUpdateBookingInfo,
    handlerClearGuests,
  };
  return (
    <BookingContext.Provider value={contextValue}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
