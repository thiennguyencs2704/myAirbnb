const BannerInfo = () => {
  return (
    <>
      <div className="w-[290px] md:w-[280px] lg:w-[320px] h-auto">
        <p className="xl:text-[48px] lg:text-[42px] md:text-[32px] text-[24px] leading-[16px][16px] md:leading-[40px] lg:leading-[46px] lg:mt-4 md:mt-4 xl:leading-[58px] font-bold text-white">
          Olympian {`&`} Paralympian Online Experiences
        </p>
      </div>

      <div className="flex justify-center w-full md:inline">
        <div className="mt-6 text-center bg-white border border-gray-300 rounded-lg w-[110px] h-[38px] shadow-md">
          <a className="relative h-full pt-2 text-sm font-medium text-gray-900 top-1">
            Explore now
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerInfo;
