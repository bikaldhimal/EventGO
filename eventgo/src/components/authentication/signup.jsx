import React, { useState } from "react";
import axios from "./../../axios";
import LandingLogo from "../../assets/images/LandingLogo.svg";
import Nepathya from "../../assets/images/Nepathya.svg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();

  // Signup controller for front-end
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmptyFields = () => {
    // Check if a notification with the ID 'empty-fields' is currently active
    if (!toast.isActive("empty-fields")) {
      toast.error("Fields are empty!", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields", // Set the ID of the notification
      });
    }
  };

  const handleInvalidCredentials = () => {
    if (!toast.isActive("empty-fields")) {
      toast.warning("Password doesn't match!", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
      });
    }
  };

  const handleError = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error(error, {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
      });
    }
  };

  const handleSuccess = () => {
    if (!toast.isActive("empty-fields")) {
      toast.success(success, {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword || !role) {
      handleEmptyFields();
    } else {
      if (password !== confirmPassword) {
        handleInvalidCredentials();
      } else {
        axios
          .post("/user/signup", {
            name,
            email,
            password,
            role,
          })
          .then((response) => {
            if (response.data.status === 201) {
              setSuccess("User created successfully");
              navigate("/login");
              handleSuccess();
            } else setError(response.data.message);
          })
          .catch((error) => {
            setError("Something went wrong!");
            console.log(error);
            handleError();
          });
      }
    }
  };

  return (
    <section className="flex justify-center items-center bg-[#ECEFF3] w-full min-h-screen font-montserrat">
      <img
        src={Nepathya}
        alt="Nepathya"
        className="invisible transform -scale-x-100 rounded-none md:invisible lg:visible w-0 h-0 md:w-0 md:h-0 lg:w-[35rem] lg:h-[50rem] justify-end rounded-tl-md rounded-bl-md lg:rounded-tl-md lg:rounded-bl-md lg:rouned-tr-none lg:rounded-br-none xl:rouned-tr-none xl:rounded-br-none"
      />
      <div className="flex flex-col bg-[#ffffff] w-[23rem] h-[50rem] md:w-[35rem] md:h-[50rem] pb-10 rounded-md md:rounded-md lg:rounded-tr-md lg:rounded-br-md lg:rounded-tl-none lg:rounded-bl-none">
        <img
          src={LandingLogo}
          alt="eventgo logo"
          className="w-[9rem] h-[9rem] md:w-[9.5rem] md:h-[69.5rem] lg:w-[10.5rem] lg:h-[10.5rem] mx-auto mt-10"
        />
        <form
          action=""
          className="flex flex-col mx-12 md:mx-16 lg:mx-20 xl:mx-20 mt-10"
        >
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name *"
            autoComplete="name"
            required
            className="flex justify-between items-center text-[#777575] outline-0 border-[0.05rem] border-light_gray focus:border-[#0C61FE] focus:border-[0.05rem] mb-5 text-[16px] p-2 rounded-md shadow-sm tracking-wide"
          />

          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-[#777575] outline-0 border-[0.05rem]  border-light_gray focus:border-[#0C61FE] focus:border-[0.5] mb-5 text-[16px] p-2 rounded-md shadow-sm tracking-wide"
            placeholder="Email *"
            required
            autoComplete="email"
          />

          <input
            type="password"
            id="password"
            name="password"
            className="text-[#777575] outline-0 border-[0.05rem]  border-light_gray focus:border-[#0C61FE] focus:border-[0.5] mb-5 text-[16px] p-2 rounded-md shadow-sm tracking-wide"
            placeholder="Enter your password *"
            required
            autoComplete="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            autoComplete="password"
            className="text-[#777575] outline-0 border-[0.05rem]  border-light_gray focus:border-[#0C61FE] focus:border-[0.5] mb-5 text-[16px] p-2 rounded-md shadow-sm tracking-wide"
            placeholder="Re-enter your password *"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="flex items-center mb-2">
            <input
              checked={role === "user"}
              onChange={(e) => setRole(e.target.value)}
              id="default-radio-1"
              type="radio"
              value="user"
              name="role"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-[#777575] dark:text-gray-300"
            >
              I'm a User
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              checked={role === "actor"}
              onChange={(e) => setRole(e.target.value)}
              id="default-radio-2"
              type="radio"
              value="actor"
              name="role"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-[#777575] dark:text-gray-300"
            >
              I'm an artist
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked={role === "manager"}
              onChange={(e) => setRole(e.target.value)}
              id="default-radio-3"
              type="radio"
              value="manager"
              name="role"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-3"
              className="ml-2 text-sm font-medium text-[#777575] dark:text-gray-300"
            >
              I'm a manager
            </label>
          </div>

          <div className="flex flex-col justify-center items-center mt-10 w-full">
            <p className="text-sm text-[8px] md:text-[11px] text-[#595C62]">
              By clicking create account, you agree to EventGo's{" "}
              <span className="text-black hover:underline hover:cursor-pointer">
                User Agreement,
              </span>
            </p>
            <p className="text-sm text-[8px] md:text-[11px] text-[#595C62]">
              <span className="text-black hover:underline hover:cursor-pointer">
                Privacy Policy,{" "}
              </span>
              and{" "}
              <span className="text-black hover:underline hover:cursor-pointer">
                Cookie Policy.
              </span>
            </p>
          </div>

          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="mt-6 mx-8 px-10 py-2 bg-[#0C61FE] hover:bg-[#1b41d8] text-[#ffffff] font-medium rounded-2xl shadow-lg"
          >
            Create Account
          </button>

          <div className="flex mt-6 mx-10 justify-center items-center">
            <div className="w-[3rem] mx-5 h-[0.05rem] bg-[#9F9F9F]"></div>
            <p className="text-[#9F9F9F]">or</p>
            <div className="w-[3rem] mx-5 h-[0.05rem] bg-[#9F9F9F]"></div>
          </div>
          <p className="flex justify-center items-center mt-6 text-[#9F9F9F] text-sm gap-2">
            Already on EventGO?{" "}
            <Link to="/login">
              <span className="text-[#74A470] hover:underline hover:cursor-pointer">
                Sign in
              </span>{" "}
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Signup;
