import Image from "next/image";
import React, { FC } from "react";
import { CardsProps } from "../../pages";
import { DiscoverThing } from "../../types/types";

const DiscoverThings: FC<CardsProps> = ({ discoverThings }) => {
  return (
    <div className="my-14">
      <h1 className="text-[32px] font-bold">Discover things to do</h1>
      <div className=" grid grid-cols-2 sm:grid-cols-3 gap-5 mt-[22px]">
        {discoverThings?.map((item: DiscoverThing, i: number) => (
          <div key={i} className="hover:cursor-pointer">
            <Image
              src={item.img}
              width={460}
              height={460}
              objectFit="cover"
              className="rounded-lg"
            />
            <h2 className="w-10/12 text-base font-semibold md:text-lg">
              {item.title}
            </h2>
            <p className="w-10/12 text-sm md:text-base">{item.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverThings;
