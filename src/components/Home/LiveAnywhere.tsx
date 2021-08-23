import Image from "next/image";
import React, { FC } from "react";
import { CardsProps } from "../../pages";
import { AnywhereCategory } from "../../types/types";

const LiveAnywhere: FC<CardsProps> = ({ anywhereCategories }) => {
  return (
    <div className="mt-10">
      <h1 className="text-[32px] font-bold">Live anywhere</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-[22px]">
        {anywhereCategories?.map((item: AnywhereCategory, i: number) => (
          <div
            key={i}
            className="hover:cursor-pointer hover:scale-105 hover:duration-75"
          >
            <Image
              src={item.img}
              width={340}
              height={340}
              objectFit="contain"
              className="rounded-xl"
            />
            <h2 className="text-base font-semibold md:text-lg">
              {item.category}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveAnywhere;
