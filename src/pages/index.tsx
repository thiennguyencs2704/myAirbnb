import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex min-h-screen mx-auto">
      <Head>
        <script
          async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3p_GqRnG15VxQoZ7auxNg8dxbJOEEu94&libraries=places"
        ></script>
      </Head>
      <main className="mx-auto max-w-screen-2xl">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>Check</p>
      </main>
    </div>
  );
}
