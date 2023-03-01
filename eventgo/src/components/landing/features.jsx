import React from "react";
import { Link } from "react-router-dom";
import handsphone from "../../assets/images/handsphone.svg";
import bandconcert from "../../assets/images/bandconcert.svg";
import buddiespayment from "../../assets/images/buddiespayment.svg";

const Features = () => {
  return (
    <>
      <div className="w-full h-fit bg-cream font-montserrat scroll-smooth">
        <div className="flex flex-col  lg:justify-between lg:items-center lg:gap-16 xl:gap-16 2xl:gap-20 px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-24 py-3 pb-16 mx-auto select-none">
          {/* top */}

          <div className="flex flex-col md:flex-row justify-center items-center sm:justify-center sm:items-center md:justify-between md:items-center lg:justify-between lg:items-center lg:w-full xl:justify-between xl:items-center 2xl:justify-between 2xl:items-center py-10 gap-10 font-serif">
            <h1 className="text-center sm:text-center md:text-start lg:text-start xl:text-start 2xl:text-start text-title text-4xl sm:text-[2.7rem] md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-serif font-medium leading-[45px] sm:leading-[55px] md:leading-[55px] lg:leading-[65px] xl:leading-[65px] 2xl:leading-[75px] tracking:wider sm:tracking-wider md:tracking-widest xl:tracking-wider">
              Our Features <br />
              You can get
            </h1>
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

          {/* top end */}

          {/* mid */}

          <div className="flex flex-col md:flex-row justify-center items-center sm:justify-center sm:items-center md:justify-between md:items-cente lg:w-full py-10 gap-10 font-serif">
            {/* left set */}

            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src={handsphone}
                alt="hands phone"
                className="px-8 md:px-4 md:max-w-[15rem] lg:max-w-[14rem]"
              />
              <h3 className="text-2xl font-medium">Event Management</h3>
              <p className="text-center text-xs px-12 md:px-6 lg:px-12 2xl:max-w-3xl leading-5">
                Here you can handle events virtually with out any burden of time
                complexity. You can create, post, update and delete the events
                as per your requirement to help run your business smoothly
              </p>
            </div>

            {/* left set end */}
            {/* right */}

            <div className="flex flex-col justify-center items-center md:justify-between md:items-center gap-3">
              <img
                src={bandconcert}
                alt="hands phone"
                className="px-8 md:px-1 md:max-w-xs"
              />
              <h3 className="text-2xl font-medium">Request an Artist</h3>
              <p className="text-center text-xs px-12 md:px-6 lg:px-12 2xl:max-w-3xl leading-5">
                We always provide platform for requesting an artist through the
                dynamic UI of EventGO which makes it easier to understand the
                user requirements and run the events simultaneously.
              </p>
            </div>

            {/* right end */}
          </div>
          {/* mid end */}

          {/* bottom */}

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-3">
              <img src={buddiespayment} alt="hands phone" className="px-8" />
              <h3 className="text-2xl font-medium">Digital Transaction</h3>
              <p className="text-center text-xs px-12 md:px-40 lg:px-72 xl:px-48 xl:max-w-3xl 2xl:max-w-4xl leading-5">
                No need to worry about physical transaction because we provide
                facility for online payment
              </p>
            </div>
          </div>

          {/* bottom end */}
        </div>
      </div>
    </>
  );
};

export default Features;
