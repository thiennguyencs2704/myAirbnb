import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axios from "axios";
import PageLayout from "../components/Layout/PageLayout";

const fetcher = async (url: string) => {
  const res = await axios(url);
  return res.data;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher, dedupingInterval: 600000 }}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </SWRConfig>
  );
}
export default MyApp;
