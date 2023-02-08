import React, { useState } from "react";
import axios from "axios";
import LandingLogo from "../../assets/images/LandingLogo.svg";
import Nepathya from "../../assets/images/Nepathya.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [selected, setSelected] = useState("");

  const handleCheckboxChange = (event) => {
    setSelected(event.target.value);
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  // Signup controller for front-end
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email && !password && !confirmPassword) {
      {
        // alert("The fields are empty, Please fill all the fields");
        showAlert && (
          <div
            className="bg-blue-500 text-white p-4 rounded-lg"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            Please fill all the fields and try again
          </div>
        );
      }
    } else {
      if (password !== confirmPassword) {
        // alert("The fields are empty, Please fill all the fields");
        showAlert && (
          <div
            className="bg-blue-500 text-white p-4 rounded-lg"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            Password didn't match <br />
            Please try again
          </div>
        );
      } else {
        axios
          .post("http://localhost:3000/api/user/signup", {
            name,
            email,
            password,
          })
          .then((response) => {
            if (response.data.success) {
              setSuccess(response.data.message);
              navigate("/login");
            } else setError(response.data.message);
          })
          .catch((error) => {
            setError(error.message);
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
          // onSubmit={handleSubmit}
          className="flex flex-col mx-12 md:mx-16 lg:mx-20 xl:mx-20 mt-10"
        >
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name *"
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
          />
          <div className="flex justify-between items-center text-[#777575] outline-0 border-[0.05rem] border-light_gray focus:border-[#0C61FE] focus:border-[0.05rem] mb-5 text-[16px] p-2 rounded-md shadow-sm tracking-wide">
            <input
              type={showPassword1 ? "text" : "password"}
              id="password"
              name="password"
              className="outline-0"
              placeholder="Enter your password *"
              required
              onChange={(e) => setPassword(e.target.value)}
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
          <div className="flex justify-between items-center text-[#777575] outline-0 border-[0.05rem] border-light_gray focus:border-[#0C61FE] focus:border-[0.05rem] mb-5 text-[16px] p-2 rounded-md shadow-sm tracking-wide">
            <input
              type={showPassword2 ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              required
              className="outline-0"
              placeholder="Re-enter your password *"
              onChange={(e) => setConfirmPassword(e.target.value)}
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

          <div className="flex flex-col gap-1">
            <div className="flex gap-2 mx-3 justify-start items-center">
              <input
                type="checkbox"
                value="option3"
                onChange={handleCheckboxChange}
                checked={selected === "option3"}
                className="w-fit h-fit focus:outline-blue-500 active:outline-red-500 outline-none"
              />
              <label htmlFor="" className="text-[#9F9F9F] text-[15px]">
                Are you an artist?
              </label>
            </div>
            <div className="flex gap-2 mx-3 justify-start items-center">
              <input
                type="checkbox"
                value="option1"
                defaultChecked
                onChange={handleCheckboxChange}
                checked={selected === "option1"}
                className="w-fit h-fit focus:outline-blue-500 active:outline-red-500 outline-none"
              />
              <label htmlFor="" className="text-[#9F9F9F] text-[15px]">
                Are you a General User?
              </label>
            </div>
            <div className="flex gap-2 mx-3 justify-start items-center">
              <input
                type="checkbox"
                value="option2"
                onChange={handleCheckboxChange}
                checked={selected === "option2"}
                className="w-fit h-fit focus:outline-blue-500 active:outline-red-500 outline-none"
              />
              <label htmlFor="" className="text-[#9F9F9F] text-[15px]">
                Are you an Event Manager?
              </label>
            </div>
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
            className="mt-12 mx-8 px-10 py-2 bg-[#0C61FE] hover:bg-[#1b41d8] text-[#ffffff] font-medium rounded-2xl shadow-lg"
          >
            Create Account
          </button>
          {error && showAlert && (
            <div
              className="bg-blue-500 text-white p-4 rounded-lg"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              {error}
            </div>
          )}
          {success && showAlert && (
            <div
              className="bg-blue-500 text-white p-4 rounded-lg"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              {success}
            </div>
          )}

          <div className="flex mt-10 mx-10 justify-center items-center">
            <div className="w-[3rem] mx-5 h-[0.05rem] bg-[#9F9F9F]"></div>
            <p className="text-[#9F9F9F]">or</p>
            <div className="w-[3rem] mx-5 h-[0.05rem] bg-[#9F9F9F]"></div>
          </div>
          <p className="flex justify-center items-center mt-10 text-[#9F9F9F] text-sm gap-2">
            Already on EventGO?{" "}
            <Link to="/login">
              <span className="text-[#74A470] hover:underline hover:cursor-pointer">
                Sign in
              </span>{" "}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
