import React from "react";
import CommentSymbol from "../../assets/images/CommentSymbol.svg";
import Commentor1 from "../../assets/images/Commentor1.svg";
import Commentor2 from "../../assets/images/Commentor2.svg";
import Commentor3 from "../../assets/images/Commentor3.svg";
import Commentor4 from "../../assets/images/Commentor4.svg";
import Commentor5 from "../../assets/images/Commentor5.svg";
import formIcon from "../../assets/images/formIcon.svg";
import { FiArrowRight } from "react-icons/fi";
import AutoDateTime from "./autoDateTime";

const Contact = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#11151E] font-montserrat scroll-smooth">
        <div className="flex flex-col lg:justify-between lg:items-center gap-5 lg:gap-14 xl:gap-16 2xl:gap-20 px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-24 py-3 pb-6 mx-auto">
          {/* top */}
          <div className="flex flex-col lg:flex-row md:flex-col justify-center items-center sm:justify-center sm:items-center md:justify-center md:items-center lg:justify-between lg:items-start lg:w-full xl:justify-between xl:items-center 2xl:justify-between 2xl:items-center py-10 gap-10 font-serif">
            {/* tetsimonials */}
            <div className="flex flex-col gap-5 lg:gap-[2.2rem] md:justify-center md:items-center md:text-center lg:justify-start lg:items-start">
              <h1 className="whitespace-normal select-none text-center sm:text-center md:text-center lg:text-start xl:text-start lg:min-w-[450px] xl:min-w-[500px] 2xl:min-w-[550px] 2xl:text-start text-white text-3xl sm:text-[2.7rem] md:text-4xl lg:text-3xl xl:text-5xl 2xl:text-5xl font-serif font-medium leading-[45px] sm:leading-[55px] md:leading-[55px] lg:leading-[55px] xl:leading-[65px] 2xl:leading-[75px] tracking:wider sm:tracking-wider md:tracking-widest xl:tracking-wider">
                People are saying
                <br />
                About EventGO
              </h1>
              <p className="whitespace-normal select-none text-light_gray text-center 2xl:text-justify lg:text-start text-xs md:text-sm px-16 sm:px-28 md:px-32 lg:px-0 lg:w-[18rem] 2xl:w-96 leading-5">
                Everything you need to accept to manage the event and grow your
                business anywhere on planet
              </p>
              {/* comment symbol */}
              <div className="flex justify-center items-center">
                <img
                  src={CommentSymbol}
                  alt="comment"
                  className="text-center w-5 h-5"
                />
              </div>
              <p className="flex whitespace-normal text-light_gray font-extralight italic text-center 2xl:text-justify lg:text-start text-xs md:text-sm px-10 sm:px-28 md:px-32 lg:px-0 lg:w-[18rem] 2xl:w-96 leading-5">
                I very much assist by this event management web-based
                application, my days are very easy to use this application and
                its very helpful in my life 😍
              </p>
              {/* comment symbol end */}

              <p className="text-white italic text-center lg:text-start text-xs md:text-sm tracking-wide">
                _Riya Maskey
              </p>

              {/* commentor images */}
              <div className="flex justify-center items-center select-none">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full">
                  <img src={Commentor1} alt="commentor" className="grayscale" />
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full">
                  <img src={Commentor2} alt="commentor" className="grayscale" />
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full">
                  <img src={Commentor3} alt="commentor" className="grayscale" />
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full">
                  <img src={Commentor4} alt="commentor" className="grayscale" />
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full">
                  <img src={Commentor5} alt="commentor" className="grayscale" />
                </div>
              </div>
              {/* commentor images end */}
            </div>
            {/* tetsimonials end */}

            {/* form */}
            <form
              action=""
              className="flex flex-col w-full px-10 sm:px-20 md:px-20 lg:px-14 xl:px-20 py-8 gap-10 bg-[#191F2B] rounded-md 2xl:rounded-lg"
            >
              {/* logo and title */}
              <div className="flex flex-col justify-center items-center gap-2 md:gap-5">
                <img
                  src={formIcon}
                  alt="form icon"
                  className="w-10 h-10 xl:w-12 xl:h-12"
                />
                <h3 className="text-white select-none text-center font-medium lg:text-lg font-serif md:text-md tracking-wider sm:tracking-widest">
                  Get Started
                </h3>
              </div>
              {/* logo and title end */}
              {/* input fields */}
              <div className="flex flex-col gap-3">
                <label className="text-white text-sm md:text-md lg:text-md xl:text-md tracking-wider sm:tracking-widest select-none">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="px-3 py-2 sm:py-3 md:py-3 lg:py-4 rounded-md tracking-wider text-title text-sm lowercase"
                />
                <label className="text-white text-sm md:text-md lg:text-md xl:text-md tracking-wider sm:tracking-widest select-none">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="What are you say?"
                  className="px-3 py-3 tracking-wider text-title text-sm rounded-md normal-case whitespace-normal caret-blue-500 resize-y"
                ></textarea>
              </div>
              {/* input fields end */}
              <div className="flex justify-center items-center lg:justify-start lg:items-center">
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-start w-48 lg:w-52 px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded-md rotate-[-40deg] bg-greenCustom absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative text-center w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Request
                  </span>
                </a>
              </div>
            </form>

            {/* form end */}
          </div>
          {/* top end */}
          {/* horizontal bar */}
          <p className="w-full bg-title h-[0.2px]"></p>
          {/* horizontal bar end */}
          {/* mid */}
          <div className="flex flex-col lg:flex-col xl:flex-row lg:justify-between lg:items-start lg:w-full gap-10 lg:gap-14 xl:gap-[10rem] 2xl:gap-[13rem] px-4 lg:px-0 xl:px-0">
            {/* left */}
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:px-0 gap-4 sm:px-16">
              <h3 className="text-3xl select-none font-medium text-transparent bg-clip-text bg-gradient-to-r from-tl_signup to-bl_signup">
                EventGO
              </h3>
              <p className="text-light_gray text-xs select-none">
                Get started now try our product
              </p>
              <div className="flex justify-between items-center p-2 sm:w-full md:max-w-[40rem] border-[0.1rem] lg:w-96 border-gray-600 hover:border-white focus:border-white active:border-white accent-white rounded-[500px]">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="bg-transparent text-white w-64 text-sm outline-0 px-2 py-1 lowercase"
                />
                <div className="flex justify-center items-center bg-greenCustom w-8 h-8 rounded-full text-white hover:bg-orange-500">
                  <FiArrowRight />
                </div>
              </div>
            </div>
            {/* left end */}
            {/* right */}
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-center gap-10 lg:w-full">
              {/* support */}
              <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 text-center lg:text-start">
                <h4 className="text-white text-sm select-none">Support</h4>
                <p className="text-light_gray text-sm hover:underline underline-offset-2 decoration-light-gray">
                  Help Centre
                </p>
                <p className="text-light_gray text-sm hover:underline underline-offset-2 decoration-light-gray">
                  About
                </p>
                <p className="text-light_gray text-sm hover:underline underline-offset-2 decoration-light-gray">
                  Contact Us
                </p>
              </div>
              {/* support end */}
              {/* help and solution */}
              <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 text-center lg:text-start">
                <h4 className="text-white text-sm select-none">
                  Help and Solution
                </h4>
                <p className="text-light_gray text-sm hover:underline underline-offset-2 decoration-light-gray">
                  Talk to support
                </p>
                <p className="text-light_gray text-sm hover:underline underline-offset-2 decoration-light-gray">
                  Support Docs
                </p>
                <p className="text-light_gray text-sm hover:underline underline-offset-2 decoration-light-gray">
                  System Status
                </p>
              </div>
              {/* help and solution end */}
              {/* product */}
              <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 text-center lg:text-start">
                <h4 className="text-white text-sm select-none">Product</h4>
                <p className="text-light_gray text-sm hover:underline underline-offset-2 decoration-light-gray">
                  Update
                </p>
                <p className="text-light_gray text-sm hover:underline underline-offset-2 decoration-light-gray">
                  Security
                </p>
                <p className="text-light_gray text-sm hover:underline underline-offset-2 decoration-light-gray">
                  Ethics & Compliance
                </p>
              </div>
              {/* product end */}
            </div>
            {/* right end */}
          </div>

          {/* mid end */}
          {/* footer */}

          <div className="flex flex-col md:flex-row justify-center items-center md:justify-center md:items-center lg:justify-start lg:items-center lg:w-full 2xl:text-xs gap-2 md:gap-5 text-white text-[0.6rem] mt-5 lg:mt-0 sm:tracking-wider xl:tracking-widest">
            <div className="flex justify-center items-center gap-1 whitespace-normal">
              &copy;
              <AutoDateTime /> <p> EventGO Copyright and rights reserved</p>
            </div>
            <p className="flex gap-2 justify-center items-center">
              <span>Terms and Condition</span>
              <span className="w-[0.2rem] h-[0.2rem] bg-white rounded-full" />
              <span>Privacy Policy</span>
            </p>
            <p>Nepal</p>
          </div>

          {/* footer end */}
        </div>
      </div>
    </>
  );
};

export default Contact;
