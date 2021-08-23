import Image from "next/image";
import React from "react";

const HostingBanner = () => {
  return (
    <div className="relative left-0 mt-14">
      <div className=" w-full h-[500px] sm:hidden">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_w=320"
          }
          objectFit="cover"
          layout="fill"
          objectPosition="bottom center"
          quality={100}
          className="rounded-2xl"
        />
      </div>

      <div className="w-full hidden sm:block sm:h-[350px] lg:h-[400px]">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=2560"
          }
          objectFit="cover"
          layout="fill"
          objectPosition="top center"
          quality={100}
          className="rounded-2xl"
        />
      </div>

      <div className="absolute px-10 text-center text-white top-10 sm:px-0 sm:left-12 sm:w-[200px] lg:w-[250px] sm:top-20 md:left-16 lg:top-[104px] lg:left-20 xl:left-28">
        <h1 className="text-xl font-bold lg:text-4xl">Try hosting</h1>
        <p className="mt-1 text-base lg:mt-3 lg:text-lg">
          Earn extra income and unlock new oppotunities by sharing your space
        </p>
        <button
          type="button"
          className="h-[35px] w-[105px] bg-white border border-gray-300 shadow-lg rounded-xl text-sm font-medium text-center pb-[2px] text-black mt-3 lg:mt-5"
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default HostingBanner;
