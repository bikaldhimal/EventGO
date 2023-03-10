import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "./../../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recovery = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmptyFields = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error("Please enter your email", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
      });
    }
  };

  const handleSuccess = () => {
    if (!toast.isActive("empty-fields")) {
      toast.success("An email with otp has been sent successfully", {
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

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email) {
      handleEmptyFields();
    } else {
      setEmail(email.toLocaleLowerCase());
      axios
        .post("/user/forgot-password", {
          email,
        })
        .then((response) => {
          if (response.status === 200) {
            handleSuccess();
            navigate("/otp");
            localStorage.setItem("email", email);
          }
          console.log(response);
        })
        .catch((error) => {
          handleError();
          console.log(error);
        });
    }
  };

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
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border-[0.1rem] hover:border-light_gray active:border-light_gray focus:border-light_gray px-5 py-3 w-full rounded-lg text-title"
            />
            <Link
              to="/otp"
              onClick={(e) => {
                handleForgotPassword(e);
              }}
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
        <ToastContainer />
      </section>
    </>
  );
};

export default Recovery;
