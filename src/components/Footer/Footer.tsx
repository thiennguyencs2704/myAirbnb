import React from "react";
import useSWR from "swr";
import { FooterType } from "../../types/types";

const Footer = () => {
  const url = "/footer.json";
  const { data: categories } = useSWR(url);

  return (
    <div className="grid grid-cols-4 px-[76px] bg-gray-100 gap-x-16 py-14">
      {categories?.map((item: FooterType, i: number) => (
        <div key={i}>
          <h1 className="mb-3 font-semibold ">{item.category}</h1>
          <ul className="space-y-3 text-sm list-none">
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
