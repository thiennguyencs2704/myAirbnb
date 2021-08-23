import Image from "next/image";
import React from "react";
import useSWR from "swr";

type nearbyLocation = {
  img: string;
  location: string;
  distance: string;
};

const ExploreNearby = () => {
  const url = "/nearby.json";
  const { data: nearbyLocation, error } = useSWR(url);

  if (error) return <div>Fail to fetch</div>;

  return (
    <div className="mt-8">
      <h1 className="text-[32px] font-bold">Explore nearby</h1>
      <div className="grid lg:grid-cols-4 lg:grid-rows-2">
        {nearbyLocation?.map((item: nearbyLocation, i: number) => (
          <div
            key={i}
            className="flex items-center mt-[22px] mr-5 md:mr-10 hover:bg-gray-100 rounded-r-xl hover:shadow-md hover:cursor-pointer hover:scale-105 hover:transform"
          >
            <Image
              src={item.img}
              width={64}
              height={64}
              className="rounded-lg"
            />
            <div className="ml-3">
              <p className="font-semibold">{item.location}</p>
              <p>{item.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreNearby;
