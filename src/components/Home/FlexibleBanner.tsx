import Image from "next/image";
import React from "react";

const FlexibleBanner = () => {
  return (
    <div className="relative left-0 mt-14">
      <div className="w-full h-[250px] md:h-[350px] lg:h-[450px]">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560"
          }
          objectFit="cover"
          layout="fill"
          objectPosition="bottom center"
          quality={100}
        />
      </div>

      <div className="absolute flex flex-col items-center text-white sm:text-gray-800 top-8 md:top-32 lg:top-32 xl:top-20 left-1/2 ml-[-125px]">
        <p className="text-lg font-medium">Not sure where to go? Perfect.</p>
        <button
          type="button"
          className="md:w-[180px] md:h-[46px] w-[160px] h-[45px] text-lg md:text-[19px] mt-3 bg-white rounded-full border border-gray-300"
        >
          <p className="mb-1">
            <span className="bg-clip-text text-transparent font-medium bg-gradient-to-r from-[#8d2cad] via-[#ac1985] to-[#da7c46]">
              {"I'm flexible"}
            </span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default FlexibleBanner;
