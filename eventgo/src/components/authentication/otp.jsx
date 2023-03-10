import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "./../../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState("");

  const handleEmptyFields = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error("Please enter your OTP to continue", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
      });
    }
  };

  const handleSuccess = () => {
    if (!toast.isActive("empty-fields")) {
      toast.success("An email with OTP sent successfully", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty",
      });
    }
  };

  const handleError = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
      });
    }
  };

  // Check OTP
  const handleOTP = (e) => {
    e.preventDefault();

    if (!otp) {
      handleEmptyFields();
    } else {
      axios
        .post("/user/check-otp", {
          otp,
        })
        .then((response) => {
          if (response.status === 400) {
            alert("Invalid OTP");
          }
          if (response.status === 200) {
            navigate("/reset");
          }
          console.log(response);
        })
        .catch((error) => {
          handleError();
          console.log(error);
        });
    }
  };

  // Resend OTP
  const resendOTP = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");
    axios
      .post("/user/forgot-password", {
        email,
      })
      .then((response) => {
        handleSuccess();
        if (response.status === 200) {
          navigate("/otp");
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
              maxLength="6"
              onChange={(e) => setOTP(e.target.value)}
              className="text-center bg-white border-[0.1rem] hover:border-light_gray active:border-light_gray focus:border-light_gray mb-5 px-5 py-3 w-full rounded-lg text-title tracking-widest text-[14px]"
            />
            <Link
              to="/reset"
              onClick={(e) => {
                handleOTP(e);
              }}
              className="flex justify-center items-center w-full mb-5 px-10 py-3 bg-[#5B55FE] rounded-lg text-white hover:bg-[#FC5B62] font-medium "
            >
              Recover
            </Link>
            <div className="text-gray_title text-[15px]">
              Can't get OTP?{" "}
              <button
                onClick={(e) => {
                  resendOTP(e);
                }}
                className="text-[#FC5B62] hover:cursor-pointer hover:underline"
              >
                Resend
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Otp;
