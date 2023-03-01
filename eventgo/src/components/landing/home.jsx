import React from "react";
import { Link } from "react-router-dom";
import HeadingImage from "../../assets/images/HeadingImage.svg";
import { SiEventbrite } from "react-icons/si";
import { SiMusicbrainz } from "react-icons/si";
import { FaOldRepublic } from "react-icons/fa";
import { RiHotelFill } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-slate-200 font-montserrat scroll-smooth">
        <div className="flex flex-col gap-5 lg:gap-16 xl:gap-16 2xl:gap-20 px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-24 py-3 mx-auto justify-between">
          {/* top */}
          <div className="flex flex-col lg:flex-row justify-between py-10 gap-16">
            {/* left */}
            <div className="flex flex-col justify-between items-center lg:items-start gap-5 2xl:gap-12">
              <h1 className="font-bold select-none text-[2.5rem] sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-serif leading-[48px] sm:leading-[60px] md:leading-[65px] lg:leading-[55px] xl:leading-[65px] 2xl:leading-[75px] text-title text-center lg:text-start tracking-wide md:tracking-wider lg:tracking-wider xl:tracking-wider 2xl:tracking-wider">
                We're here to <br />
                Increase your <br />
                Productivity
              </h1>
              <p className="text-gray_title select-none text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-center lg:text-start font-serif tracking-wide md:tracking-widest lg:tracking-wider">
                Let’s make your work more organize and <br />
                easily using the EventGO Dashboard with <br />
                many of the latest feature-sin managing <br />
                work everyday.
              </p>
              <Link
                to="/signup"
                className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-slate-700 border-2 border-slate-700 rounded-xl hover:text-white group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-slate-700 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Get Started</span>
              </Link>
            </div>
            {/* left end */}
            {/* right */}
            <div className="flex px-4 sm:px-8 md:px-16 justify-center items-center lg:max-w-lg 2xl:max-w-2xl">
              <img
                src={HeadingImage}
                alt="event"
                className="lg:max-w-[35rem] 2xl:max-w-[50rem]"
              />
            </div>
          </div>
          {/* top end */}
          {/* bottom */}
          <div className="flex flex-col justify-center items-center px-4 gap-12 2xl:gap-16 font-serif select-none">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-center font-semibold text-title tracking-wide 2xl:tracking-wider">
              More than 15,000 teams use EventGO
            </h3>

            {/* Icon and Title bar */}

            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-28 2xl:gap-36">
              {/* Set 1 */}
              <div className="flex flex-col xl:flex-row justify-center items-center gap-2 2xl:gap-5 lg:gap-4 text-gray-600 hover:text-gray-700 sm:text-xl md:text-2xl 2xl:text-3xl font-medium">
                {/* Icon */}
                <SiEventbrite />
                {/* Title */}
                <p className="">Event Organizer</p>
              </div>
              {/* Set 1 end */}
              {/* Set 2 */}
              <div className="flex flex-col xl:flex-row justify-center items-center gap-2 2xl:gap-5 lg:gap-4 text-gray-600 hover:text-gray-700 sm:text-xl md:text-2xl 2xl:text-3xl font-medium">
                {/* Icon */}
                <SiMusicbrainz />
                {/* Title */}
                <p className="">Artist</p>
              </div>
              {/* Set 2 end */}
              {/* Set 3 */}
              <div className="flex flex-col xl:flex-row justify-center items-center gap-2 2xl:gap-5 lg:gap-4 text-gray-600 hover:text-gray-700 sm:text-xl md:text-2xl 2xl:text-3xl font-medium">
                {/* Icon */}
                <FaOldRepublic />
                {/* Title */}
                <p>General Public</p>
              </div>
              {/* Set 3 end */}
              {/* Set 4 */}
              <div className="flex flex-col xl:flex-row justify-center items-center gap-2 2xl:gap-5 lg:gap-4 text-gray-600 hover:text-gray-700 sm:text-xl md:text-2xl 2xl:text-3xl font-medium">
                {/* Icon */}
                <RiHotelFill />
                {/* Title */}
                <p className="">Pubs and Bars</p>
              </div>
              {/* Set 4 end */}
              {/* Icon and Title bar end */}
            </div>
          </div>
          {/* bottom end */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Home;
