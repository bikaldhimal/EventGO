import React from "react";
import { Link } from "react-router-dom";
// import LandingLogo from "../../assets/images/LandingLogo.svg";

const Recovery = () => {
  return (
    <>
      <section className="flex justify-center items-center w-full min-h-screen relaitve bg-[#fcfbf4] font-montserrat">
        <div className="bg-white w-fit h-fit px-10 pt-16 pb-36 rounded-xl shadow-support">
          <header className="flex flex-col justify-between items-center gap-2 mb-12 w-full">
            <h3 className="font-montserrat font-semibold text-[45px] text-title">
              Hello Again!
            </h3>
            <p className="flex flex-col justify-center items-center text-light_gray text-[16px]">
              <span>Explore more by</span>
              <span>connecting with us.</span>
            </p>
          </header>
          <div className="flex flex-col justify-between items-center gap-5 w-full">
            {/* profile image */}
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="user image"
              className="w-28 h-28 rounded-full"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email here"
              className="bg-white border-[0.1rem] hover:border-light_gray active:border-light_gray focus:border-light_gray px-5 py-3 w-full rounded-lg text-title"
            />
            <Link
              to="/otp"
              className="flex justify-center items-center w-full px-10 py-3 bg-[#5B55FE] rounded-lg text-white hover:bg-[#FC5B62] font-medium "
            >
              Let's Go
            </Link>
            <p className="text-gray_title text-[15px]">
              Not a member{" "}
              <Link
                to="/signup"
                className="text-[#FC5B62] hover:cursor-pointer hover:underline"
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recovery;
