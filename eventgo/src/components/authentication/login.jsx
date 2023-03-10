import React, { useState } from "react";
import axios from "./../../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingLogo from "../../assets/images/LandingLogo.svg";
import Nepathya from "../../assets/images/Nepathya.svg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState("");
  const [error, setError] = useState("");

  const handleEmptyFields = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error("Fields are empty!", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
      });
    }
  };

  const handleInvalidCredentials = () => {
    if (!toast.isActive("empty-fields")) {
      toast.warning("Invalid Credentials!", {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/user/login",
        { email, password },
        { withCredentials: true }
      );

      if (!email && !password) {
        handleEmptyFields();
      } else {
        if (response.data.isActive) {
          setIsActive(true);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("address", response.data.address);
          localStorage.setItem("description", response.data.description);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("isActive", response.data.isActive);
          if (response.data.role === "actor") return navigate("/actor");
          if (response.data.role === "manager") return navigate("/manager");
          if (response.data.role === "user") return navigate("/user");
          if (response.data.role === "admin") return navigate("/admin");
        } else {
          setIsActive(false);
          handleInvalidCredentials();
        }
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
      handleError();
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
            autoComplete="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="text-[#777575] tracking-widest outline-0 border-[0.05rem] border-[#9F9F9F] focus:border-[#0C61FE] focus:border-[0.07rem] mb-5 text-[14px] py-2 px-3 rounded-md"
          />
          <label htmlFor="" className="text-[#9F9F9F] font-medium mb-3">
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            autoComplete="current-password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="text-[#777575] tracking-widest outline-0 border-[0.05rem] border-[#9F9F9F] focus:border-[#0C61FE] focus:border-[0.07rem] mb-5 text-[14px] py-2 px-3 rounded-md"
          />

          <Link
            to="/recovery"
            className="flex text-[#74A470] items-center text-sm hover:cursor-pointer hover:underline w-fit"
          >
            Forgot Password?
          </Link>
          <div className="inline-flex justify-center items-center mt-10">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="flex relative rounded-2xl justify-center items-center w-fit px-20 py-2 overflow-hidden group bg-[#0C61FE] hover:bg-gradient-to-r hover:from-[#0C61FE] hover:to-[#1b41d8] text-white hover:ring-[#1b41d8] transition-all ease-out duration-150"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-52 ease"></span>
              <span className="relative">Login</span>
            </button>
          </div>
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
