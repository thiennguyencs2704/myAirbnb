import React from "react";
import Head from "next/head";
import ExploreNearby from "../components/Home/ExploreNearby";
import LiveAnywhere from "../components/Home/LiveAnywhere";
import FlexibleBanner from "../components/Home/FlexibleBanner";

export default function Home() {
  return (
    <div className="flex min-h-screen mx-auto">
      <Head>
        <script
          async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3p_GqRnG15VxQoZ7auxNg8dxbJOEEu94&libraries=places"
        ></script>
      </Head>
      <main className="w-full px-6 mx-auto max-w-screen-2xl md:px-14">
        <ExploreNearby />
        <FlexibleBanner />
        <LiveAnywhere />
      </main>
    </div>
  );
}
