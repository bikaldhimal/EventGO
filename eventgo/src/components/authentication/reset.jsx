import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "./../../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reset = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleEmptyFields = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error("Fields are empty", {
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

  const handleInvalidPassword = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error("Password didn't matched", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
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

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!password1 && !password2) {
      handleEmptyFields();
    } else {
      if (password1 === password2) {
        axios
          .post("/user/reset-password", { email, password: password1 })
          .then((response) => {
            handleSuccess();
            navigate("/login");
          })
          .catch((error) => {
            handleError();
            console.log(error);
          });
      } else {
        handleInvalidPassword();
        navigate("/reset");
      }
    }
  };
  return (
    <>
      <section className="flex justify-center items-center w-full min-h-screen relaitve bg-[#fcfbf4] font-montserrat px-5">
        <form
          action=""
          className="bg-white w-fit h-fit px-10 pt-16 pb-36 rounded-xl shadow-support"
        >
          <header className="flex flex-col justify-between items-center w-full gap-2 mb-16 px-14">
            <h3 className="font-montserrat font-semibold text-[45px] text-title px-5">
              Reset
            </h3>
            <p className="flex flex-col justify-center items-center text-light_gray text-[16px]">
              Enter new password
            </p>
          </header>
          <div className="flex flex-col justify-between items-center w-full">
            <input
              type="password"
              name="password1"
              id="password1"
              placeholder="Enter new password"
              className="outline-0 flex justify-between items-center bg-white border-[0.1rem] hover:border-light_gray active:border-light_gray focus:border-light_gray mb-5 px-5 py-3 w-full rounded-lg text-title tracking-widest text-[14px]"
              onChange={(e) => setPassword1(e.target.value)}
            />

            <input
              type="password"
              name="password2"
              id="password2"
              placeholder="Re-enter new password"
              className="outline-0 flex justify-between items-center bg-white border-[0.1rem] hover:border-light_gray active:border-light_gray focus:border-light_gray mb-5 px-5 py-3 w-full rounded-lg text-title tracking-widest text-[14px]"
              onChange={(e) => setPassword2(e.target.value)}
            />

            <Link
              onClick={(e) => {
                handleResetPassword(e);
              }}
              className="flex justify-center items-center w-full mb-5 px-10 py-3 bg-[#5B55FE] rounded-lg text-white hover:bg-[#FC5B62] font-medium "
            >
              Reset
            </Link>
          </div>
        </form>
        <ToastContainer />
      </section>
    </>
  );
};

export default Reset;
