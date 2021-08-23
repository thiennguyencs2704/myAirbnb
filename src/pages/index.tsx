import React from "react";
import Head from "next/head";
import ExploreNearby from "../components/Home/ExploreNearby";
import LiveAnywhere from "../components/Home/LiveAnywhere";
import FlexibleBanner from "../components/Home/FlexibleBanner";
import axios from "axios";
import { GetStaticProps } from "next";

export type NearbyLocation = {
  img: string;
  location: string;
  distance: string;
};

export type AnywhereCategory = {
  category: string;
  img: string;
};

export interface CardsProps {
  nearbyLocations?: NearbyLocation[];
  anywhereCategories?: AnywhereCategory[];
}

export const getStaticProps: GetStaticProps = async () => {
  const URLs = ["/nearby.json", "/anywhere.json"];

  const data = [];
  for (const url of URLs) {
    const res = await axios.get(url);
    const subData = res.data;

    //For handling catch error
    if (!subData) {
      return {
        notFound: true,
      };
    }

    data.push(subData);
  }

  const [nearbyLocations, anywhereCategories] = data;

  return {
    props: {
      nearbyLocations: nearbyLocations,
      anywhereCategories: anywhereCategories,
    },
    revalidate: 5,
  };
};

const Home: React.FC<CardsProps> = ({
  nearbyLocations,
  anywhereCategories,
}) => {
  return (
    <div className="flex min-h-screen mx-auto">
      <Head>
        <script
          async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3p_GqRnG15VxQoZ7auxNg8dxbJOEEu94&libraries=places"
        ></script>
      </Head>
      <main className="w-full px-6 mx-auto max-w-screen-2xl md:px-14">
        <ExploreNearby nearbyLocations={nearbyLocations} />
        <FlexibleBanner />
        <LiveAnywhere anywhereCategories={anywhereCategories} />
      </main>
    </div>
  );
};

export default Home;
