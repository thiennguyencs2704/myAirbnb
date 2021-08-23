import Image from "next/image";
import React from "react";
import useSWR from "swr";

type anywhereCategories = {
  category: string;
  img: string;
};

const LiveAnywhere = () => {
  const url = "/anywhere.json";
  const { data: anywhereCategories } = useSWR(url);

  return (
    <div className="mt-10">
      <h1 className="text-[32px] font-bold">Live anywhere</h1>
      <div className="flex justify-between space-x-5 mt-[22px]">
        {anywhereCategories?.map((item: anywhereCategories, i: number) => (
          <div key={i} className="hover:cursor-pointer">
            <Image
              src={item.img}
              width={340}
              height={340}
              objectFit="contain"
              className="rounded-xl"
            />
            <h2 className="text-lg font-semibold">{item.category}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveAnywhere;