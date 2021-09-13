import React, { createContext, useEffect, useState } from "react";
import useSWR from "swr";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data } = useSWR(mounted ? "/anywhere.json" : null);

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
