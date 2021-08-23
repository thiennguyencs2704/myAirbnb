import React from "react";
import useSWR from "swr";
import { FooterType } from "../../types/types";

const Footer = () => {
  const url = "/footer.json";
  const { data: categories } = useSWR(url);

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 justify-center px-[76px] bg-gray-100 gap-y-2 sm:gap-y-6 gap-x-16 py-14">
      {categories?.map((item: FooterType, i: number) => (
        <div key={i}>
          <h1 className="font-semibold sm:mb-3">{item.category}</h1>
          <ul className="hidden space-y-3 text-sm list-none sm:block">
            {item.items.map((subItem: string, i: number) => (
              <li key={i}>{subItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;
