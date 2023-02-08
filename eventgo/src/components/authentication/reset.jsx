import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Reset = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  return (
    <>
      <section className="flex justify-center items-center w-full min-h-screen relaitve bg-[#fcfbf4] font-montserrat px-5">
        <div className="bg-white w-fit h-fit px-10 pt-16 pb-36 rounded-xl shadow-support">
          <header className="flex flex-col justify-between items-center w-full gap-2 mb-16 px-14">
            <h3 className="font-montserrat font-semibold text-[45px] text-title px-5">
              Reset
            </h3>
            <p className="flex flex-col justify-center items-center text-light_gray text-[16px]">
              Enter new password
            </p>
          </header>
          <div className="flex flex-col justify-between items-center w-full">
            <div className="flex justify-between items-center bg-white border-[0.1rem] hover:border-light_gray active:border-light_gray focus:border-light_gray mb-5 px-5 py-3 w-full rounded-lg text-title tracking-widest text-[14px]">
              <input
                type={showPassword1 ? "text" : "password"}
                name="password1"
                id="password1"
                placeholder="Enter new password"
                className="outline-0"
              />
              <span
                onClick={() => setShowPassword1(!showPassword1)}
                className="cursor-pointer text-gray_title"
              >
                {showPassword1 ? (
                  <AiFillEyeInvisible className="text-gray_title hover:text-title" />
                ) : (
                  <AiFillEye className="text-gray_title hover:text-title" />
                )}
              </span>
            </div>
            <div className="flex justify-between items-center bg-white border-[0.1rem] hover:border-light_gray active:border-light_gray focus:border-light_gray mb-5 px-5 py-3 w-full rounded-lg text-title tracking-widest text-[14px]">
              <input
                type={showPassword2 ? "text" : "password"}
                name="password2"
                id="password2"
                placeholder="Re-enter new password"
                className="outline-0"
              />
              <span
                onClick={() => setShowPassword2(!showPassword2)}
                className="cursor-pointer text-gray_title"
              >
                {showPassword2 ? (
                  <AiFillEyeInvisible className="text-gray_title hover:text-title" />
                ) : (
                  <AiFillEye className="text-gray_title hover:text-title" />
                )}
              </span>
            </div>

            <Link
              to="/login"
              className="flex justify-center items-center w-full mb-5 px-10 py-3 bg-[#5B55FE] rounded-lg text-white hover:bg-[#FC5B62] font-medium "
            >
              Reset
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reset;
