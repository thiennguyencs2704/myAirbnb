import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axios from "axios";
import PageLayout from "../components/Layout/PageLayout";
import "react-dates/lib/css/_datepicker.css";
import "../styles/calendar.css";
import BookingContextProvider from "../store/BookingContext";

axios.defaults.baseURL = "https://my-airbnb-61fcc-default-rtdb.firebaseio.com";

const fetcher = async (url: string) => {
  const res = await axios(url);
  return res.data;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher, dedupingInterval: 600000 }}>
      <BookingContextProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </BookingContextProvider>
    </SWRConfig>
  );
}
export default MyApp;
