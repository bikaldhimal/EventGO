import React, { useState } from "react";
import { Link } from "react-router-dom";

const Otp = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      <section className="flex justify-center items-center w-full min-h-screen relaitve bg-[#fcfbf4] font-montserrat">
        <div className="bg-white w-fit h-fit px-10 pt-16 pb-36 rounded-xl shadow-support">
          <header className="flex flex-col justify-between items-center gap-2 mb-16 w-full">
            <h3 className="font-montserrat font-semibold text-[45px] text-title">
              Recovery
            </h3>
            <p className="flex flex-col justify-center items-center text-light_gray text-[16px]">
              Enter OTP to recover your password
            </p>
          </header>
          <div className="flex flex-col justify-between items-center w-full">
            <p className="text-[10px] text-gray_title mb-2">
              Enter a 6 digit OTP sent to your email address
            </p>
            <input
              type="text"
              name="text"
              id="otp"
              placeholder="OTP"
              maxlength="6"
              className="text-center bg-white border-[0.1rem] hover:border-light_gray active:border-light_gray focus:border-light_gray mb-5 px-5 py-3 w-full rounded-lg text-title tracking-widest text-[14px]"
            />
            <Link
              to="/reset"
              className="flex justify-center items-center w-full mb-5 px-10 py-3 bg-[#5B55FE] rounded-lg text-white hover:bg-[#FC5B62] font-medium "
            >
              Recover
            </Link>
            <div className="text-gray_title text-[15px]">
              Can't get OTP?{" "}
              <button
                onClick={handleButtonClick}
                className="text-[#FC5B62] hover:cursor-pointer hover:underline"
              >
                Resend
              </button>
              {showAlert && (
                <div
                  className="bg-blue-500 text-white p-4 rounded-lg"
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                >
                  The OTP has been sent to your email <br />
                  Please check your inbox
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Otp;
