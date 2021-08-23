import Image from "next/image";
import React, { FC } from "react";
import { CardsProps } from "../../pages";
import { NearbyLocation } from "../../types/types";

const ExploreNearby: FC<CardsProps> = ({ nearbyLocations }) => {
  return (
    <div className="mt-8">
      <h1 className="text-[32px] font-bold">Explore nearby</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {nearbyLocations?.map((item: NearbyLocation, i: number) => (
          <div
            key={i}
            className="flex items-center mt-[22px] mr-5 md:mr-10 hover:bg-gray-100 rounded-r-xl hover:shadow-md hover:cursor-pointer hover:scale-105 hover:duration-75"
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
