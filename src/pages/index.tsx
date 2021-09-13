import React from "react";
import ExploreNearby from "../components/Home/ExploreNearby";
import LiveAnywhere from "../components/Home/LiveAnywhere";
import FlexibleBanner from "../components/Home/FlexibleBanner";
import axios from "axios";
import { GetStaticProps } from "next";
import Script from "next/script";
import HostingBanner from "../components/Home/HostingBanner";
import DiscoverThings from "../components/Home/DiscoverThings";
import {
  AnywhereCategory,
  DiscoverThing,
  NearbyLocation,
} from "../types/types";
import HeadLayout from "../components/Layout/HeadLayout";

export interface CardsProps {
  nearbyLocations?: NearbyLocation[];
  anywhereCategories?: AnywhereCategory[];
  discoverThings?: DiscoverThing[];
}

export const getStaticProps: GetStaticProps = async () => {
  const URLs = ["/nearby.json", "/anywhere.json", "/discovery.json"];

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

  const [nearbyLocations, anywhereCategories, discoverThings] = data;

  return {
    props: {
      nearbyLocations: nearbyLocations,
      anywhereCategories: anywhereCategories,
      discoverThings: discoverThings,
    },
  };
};

const Home: React.FC<CardsProps> = ({
  nearbyLocations,
  anywhereCategories,
  discoverThings,
}) => {
  return (
    <HeadLayout title="Airbnb | Home">
      <div className="flex min-h-screen mx-auto">
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3p_GqRnG15VxQoZ7auxNg8dxbJOEEu94&libraries=places"
          strategy="beforeInteractive"
        />

        <main className="w-full px-6 mx-auto max-w-screen-2xl md:px-14">
          <ExploreNearby nearbyLocations={nearbyLocations} />
          <FlexibleBanner />
          <LiveAnywhere anywhereCategories={anywhereCategories} />
          <HostingBanner />
          <DiscoverThings discoverThings={discoverThings} />
        </main>
      </div>
    </HeadLayout>
  );
};

export default Home;
