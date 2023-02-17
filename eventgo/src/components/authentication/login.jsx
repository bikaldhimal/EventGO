import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingLogo from "../../assets/images/LandingLogo.svg";
import Nepathya from "../../assets/images/Nepathya.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState("");

  const handleEmptyFields = () => {
    toast.error("Fields are empty!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const handleInvalidCredentials = () => {
    toast.warning("Invalid Credentials!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/login",
        { email, password }
      );
      console.log(response.data);

      if (!email && !password) {
        handleEmptyFields();
      } else {
        if (response.data.isActive) {
          setIsActive(true);
          localStorage.setItem("token", response.data.token);
          console.log(isActive);
          navigate("/actor");
        } else {
          setIsActive(false);
          handleInvalidCredentials();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex justify-center items-center bg-[#ECEFF3] w-full min-h-screen font-montserrat">
      <img
        src={Nepathya}
        alt="Nepathya"
        className="invisible transform -scale-x-100 rounded-none md:invisible lg:visible w-0 h-0 md:w-0 md:h-0 lg:w-[30rem] lg:h-[43rem] justify-end rounded-tl-md rounded-bl-md lg:rouned-tr-none lg:rounded-br-none xl:rouned-tr-none xl:rounded-br-none"
      />
      <div className="flex flex-col rounded-md bg-[#ffffff] sm:w-[25rem] sm:h-[40rem] md:w-[30rem] md:h-[43rem] pb-10 sm:rounded-md md:rounded-md lg:rounded-tr-md lg:rounded-br-md lg:rounded-tl-none lg:rounded-bl-none">
        <img
          src={LandingLogo}
          alt="eventgo logo"
          className="w-[9rem] h-[9rem] md:w-[9.5rem] md:h-[9.5rem] lg:w-[10.5rem] lg:h-[10.5rem] mx-auto mt-10"
        />
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col mx-12 mt-10"
        >
          <label htmlFor="" className="text-[#9F9F9F] font-medium mb-3">
            Username or Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="text-[#777575] tracking-widest outline-0 border-[0.05rem] border-[#9F9F9F] focus:border-[#0C61FE] focus:border-[0.07rem] mb-5 text-[14px] py-2 px-3 rounded-md"
          />
          <label htmlFor="" className="text-[#9F9F9F] font-medium mb-3">
            Password
          </label>
          {/* <div className="flex justify-between items-center gap-3 outline-0 border-[0.05rem] border-[#9F9F9F] focus:border-[#0C61FE] focus:border-[0.07rem] mb-5 text-[14px] py-2 px-3 rounded-md">
            <input
              type="passowrd"
              // type={showPassword ? "text" : "password"}
              className="outline-0 order-0 focus:outline-none focus:border-none active:outline-none active:border-none w-full py-1"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer text-gray_title"
            >
              {showPassword ? (
                <AiFillEyeInvisible className="text-gray_title hover:text-title" />
              ) : (
                <AiFillEye className="text-gray_title hover:text-title" />
              )}
            </span>
          </div> */}
          <div className="flex justify-between items-center gap-1 tracking-widest text-[#777575] outline-0 border-[0.05rem] border-[#9F9F9F] focus:border-[#0C61FE] focus:border-[0.07rem] mb-5 text-[14px] py-2 px-3 rounded-md">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-none outline-none p-0 focus:border-none focus:outline-blue-700"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer text-gray_title"
            >
              {showPassword ? (
                <AiFillEyeInvisible className="text-gray_title hover:text-title" />
              ) : (
                <AiFillEye className="text-gray_title hover:text-title" />
              )}
            </span>
          </div>
          <Link
            to="/recovery"
            className="flex text-[#74A470] items-center text-sm hover:cursor-pointer hover:underline w-fit"
          >
            Forgot Password?
          </Link>
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="flex p-2 justify-center items-center mx-6 mt-12 bg-[#0C61FE] hover:bg-[#1b41d8] text-[#ffffff] font-medium rounded-2xl shadow-lg"
          >
            Login
          </button>
          <ToastContainer />
          <div className="flex mt-10 mx-10 justify-center items-center">
            <div className="w-[3rem] mx-5 h-[0.05rem] bg-[#9F9F9F]"></div>
            <p className="text-[#9F9F9F]">or</p>
            <div className="w-[3rem] mx-5 h-[0.05rem] bg-[#9F9F9F]"></div>
          </div>
          <p className="flex justify-center items-center mt-10 text-[#9F9F9F] text-sm gap-2">
            New to EventGO?{" "}
            <Link to="/signup">
              <span className="text-[#74A470] hover:underline hover:cursor-pointer">
                Create Account
              </span>{" "}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
