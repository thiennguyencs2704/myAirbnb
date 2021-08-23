import React, { createContext, useState } from "react";

export interface BookingInfo {
  location?: string;
  checkInDate?: string | null;
  checkOutDate?: string | null;
  guests?: number;
}

interface BookingContext {
  bookingInfo: BookingInfo;
  handlerUpdateBookingInfo: (info: BookingInfo) => void;
}

export const BookingContext = createContext<BookingContext | null>(null);

const initialState: BookingInfo = {
  location: "",
  checkInDate: null,
  checkOutDate: null,
  guests: 0,
};

const BookingContextProvider: React.FC = ({ children }) => {
  const [bookingInfo, setBookingInfo] = useState(initialState);

  const handlerUpdateBookingInfo = (info: BookingInfo) => {
    setBookingInfo({ ...bookingInfo, ...info });
  };

  const contextValue: BookingContext = {
    bookingInfo,
    handlerUpdateBookingInfo,
  };
  return (
    <BookingContext.Provider value={contextValue}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
