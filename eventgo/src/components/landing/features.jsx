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
              className="flex justify-center items-center text-center w-[150px] px-4 xl:px-4 xl:py-4 2xl:px-6 py-4 2xl:py-4 font-serif 2xl:font-bold tracking-widest rounded-xl text-white text-xs font-medium bg-gradient-to-r from-tl_signup via-indigo-600 to-bl_signup hover:cursor-pointer"
            >
              <button className="font-medium text-sm">Get Started</button>
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
