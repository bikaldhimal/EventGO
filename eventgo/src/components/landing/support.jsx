import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { TfiPulse } from "react-icons/tfi";
import { HiChartBar } from "react-icons/hi";
import { GiEngagementRing } from "react-icons/gi";

const Support = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#F8F6FD] font-montserrat scroll-smooth">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 lg:gap-16 xl:gap-16 2xl:gap-20 px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-24 py-3 pb-16 mx-auto">
          {/* left */}
          <div className="flex flex-col justify-between py-10 gap-10 font-serif lg:items-start lg:min-w-[28rem]">
            <h1 className="text-center select-none lg:text-start text-title text-3xl sm:text-[2.7rem] md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-serif font-medium leading-[45px] sm:leading-[55px] md:leading-[65px] lg:leading-[55px] xl:leading-[65px] 2xl:leading-[75px] tracking:wider sm:tracking-wider md:tracking-widest xl:tracking-wider">
              How we support our <br />
              Partners all over <br />
              Nepal
            </h1>

            <p className="text-gray_title select-none text-xs sm:text-sm md:text-lg lg:text-sm xl:text-lg text-center lg:text-start leading-5">
              EventGo become a common delivery model for <br />
              many business like pubs, bars, clubs, concert, event <br />
              management, and many more
            </p>

            {/* rating */}

            <div className="flex flex-col gap-10">
              {/* 1st set */}
              <div className="flex flex-col justify-center items-center lg:items-start gap-2 md:text-lg xl:text-xl">
                <p className="flex gap-1 text-[#FDBC22]">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </p>
                <p className="text-title select-none">5/5 rating</p>
                <p className="text-gray_title select-none">Event Organizer</p>
              </div>
              {/* 1st set end */}
              {/* 2nd set */}
              <div className="flex flex-col justify-center items-center lg:items-start gap-2 md:text-lg xl:text-xl">
                <p className="flex gap-1 text-[#FDBC22]">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </p>
                <p className="text-title select-none">4.5/5 rating</p>
                <p className="text-gray_title select-none">Artist</p>
              </div>
              {/* 2nd set end */}
            </div>

            {/* rating end */}
          </div>
          {/* left end */}
          {/* right */}
          <div className="flex flex-col gap-10 lg:gap-20 lg:justify-between lg:items-start lg:min-h-[28rem]">
            {/* publishing */}

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 justify-center items-center lg:flex-start lg:items-start">
              {/* icon */}
              <div className="flex justify-center items-center p-5 xl:p-6 2xl:p-7 bg-white shadow-md rounded-xl text-green hover:bg-green hover:text-white delay-[65ms]">
                <TfiPulse className="w-10 h-10 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10" />
              </div>
              {/* icon end */}
              {/* title and desc */}
              <div className="flex flex-col gap-2">
                <h3 className="text-center select-none lg:text-start text-title text-xl md:text-2xl font-medium xl:font-semibold">
                  Publishing
                </h3>
                <p className="text-center lg:text-start text-xs 2xl:text-sm text-gray_title px-10 sm:px-48 md:px-48 lg:px-0 leading-5 lg:max-w-lg xl:max-w-sm">
                  Plan, Collaborate, and publishing your content that drives
                  meaningful engagement and growth for your brand
                </p>
              </div>
              {/* title and desc end */}
            </div>

            {/* publishing end */}
            {/* analytics */}

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 justify-center items-center">
              {/* icon */}
              <div className="flex justify-center items-center p-5 xl:p-6 2xl:p-7 bg-white shadow-md rounded-xl text-green hover:bg-green hover:text-white delay-[65ms]">
                <HiChartBar className="w-10 h-10 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10" />
              </div>
              {/* icon end */}
              {/* title and desc */}
              <div className="flex flex-col gap-2">
                <h3 className="text-center select-none lg:text-start text-title text-xl md:text-2xl font-medium">
                  Analytics
                </h3>
                <p className="text-center lg:text-start text-xs 2xl:text-sm text-gray_title px-10 sm:px-48 md:px-48 lg:px-0 leading-5 lg:max-w-lg xl:max-w-sm">
                  Analyze your performance and create gorgeous report in no time
                </p>
              </div>
              {/* title and desc end */}
            </div>

            {/* analytics end */}
            {/* engagement */}

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 justify-center items-center">
              {/* icon */}
              <div className="flex justify-center items-center p-5 xl:p-6 2xl:p-7 bg-white shadow-md rounded-xl text-green hover:bg-green hover:text-white delay-[65ms]">
                <GiEngagementRing className="w-10 h-10 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10" />
              </div>
              {/* icon end */}
              {/* title and desc */}
              <div className="flex flex-col gap-2">
                <h3 className="text-center select-none lg:text-start text-title text-xl md:text-2xl font-medium">
                  Engagement
                </h3>
                <p className="text-center lg:text-start text-xs 2xl:text-sm text-gray_title px-10 sm:px-48 md:px-48 lg:px-0 leading-5 lg:max-w-lg xl:max-w-sm">
                  Quickly navigate your agenda engage with your audience
                </p>
              </div>
              {/* title and desc end */}
            </div>

            {/* engagement end */}
          </div>
          {/* right end */}
        </div>
      </div>
    </>
  );
};

export default Support;
