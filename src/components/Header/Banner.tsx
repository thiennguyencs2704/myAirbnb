import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="z-0 w-full md:hidden sm:-mt-48">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/9754b160-759d-489b-92ad-8846fc94b73d.jpg?im_w=720"
          }
          width={800}
          height={1200}
          objectFit="contain"
        />
      </div>

      <div className="z-0 hidden w-full md:block lg:hidden">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/0abcf5f2-3e02-4a67-b4bf-52665b6366c2.jpg?im_w=720"
          }
          width={1150}
          height={900}
          objectFit="cover"
        />
      </div>

      <div className="z-0 hidden w-full lg:block xl:hidden">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
          }
          width={1280}
          height={680}
          objectFit="cover"
        />
      </div>

      <div className="z-0 hidden w-full h-[550px] xl:block">
        <Image
          src={
            "https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
          }
          objectFit="cover"
          layout="fill"
        />
      </div>
    </>
  );
};

export default Banner;
