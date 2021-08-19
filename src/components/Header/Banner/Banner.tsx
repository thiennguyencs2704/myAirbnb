import React from "react";
import Image from "next/image";
import BannerInfo from "./BannerInfo";

const Banner = () => {
  return (
    <>
      <div className="relative h-[700px] w-full md:hidden">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/9754b160-759d-489b-92ad-8846fc94b73d.jpg?im_w=720"
          }
          objectFit="cover"
          layout="fill"
          objectPosition="left bottom"
        />

        <div className="absolute top-[90px] left-1/2 ml-[-140px] text-center flex flex-col h-auto mx-auto">
          <BannerInfo />
        </div>
      </div>

      <div className="relative z-0 h-[720px] hidden w-full md:block lg:hidden">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/0abcf5f2-3e02-4a67-b4bf-52665b6366c2.jpg?im_w=720"
          }
          objectFit="cover"
          layout="fill"
          objectPosition="right bottom"
        />

        <div className="absolute mt-6 top-1/3 left-10">
          <BannerInfo />
        </div>
      </div>

      <div className="relative z-0 hidden h-[600px] w-full lg:block xl:hidden">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=1920"
          }
          objectFit="cover"
          layout="fill"
          objectPosition="right center"
        />

        <div className="absolute top-2/5 left-12">
          <BannerInfo />
        </div>
      </div>

      <div className="relative z-0 hidden w-full h-[700px] xl:block">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
          }
          objectFit="cover"
          layout="fill"
          objectPosition="right center"
        />

        <div className="absolute top-1/3 left-20">
          <BannerInfo />
        </div>
      </div>
    </>
  );
};

export default Banner;
