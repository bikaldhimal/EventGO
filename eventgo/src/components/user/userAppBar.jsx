import React from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const UserAppBar = () => {
  const name = localStorage.getItem("name");
  const address = localStorage.getItem("address");
  const role = localStorage.getItem("role");
  const image = localStorage.getItem("image");

  return (
    <div className="flex justify-between items-center gap-3 w-full border-2 rounded-lg px-5 py-2 bg-gray-800 transparent mb-5">
      <div className="flex justify-between items-center gap-3">
        <Link
          to="/user/profile"
          className="flex w-[4rem] h-[4rem] rounded-full shadow-inner bg-gray-700/90 hover:bg-gray-400 justify-center items-center drop-shadow-sm hover:scale-90 duration-300"
        >
          <img
            src={image ? image : NepathyaProfile}
            alt="user profile"
            className="w-[3rem] h-[3rem] rounded-full object-center"
          />
        </Link>
        <div className="flex flex-col text-white py-2">
          <h4 className="font-normal text-[16px] font-serif leading-5">
            {name} <br />
            <span className="text-xs font-light font-serif">{role}</span> <br />
            <span className="text-xs font-light font-serif">{address}</span>
          </h4>
        </div>
      </div>
      <Link
        to="/user/message"
        className="flex justify-center items-center static hover:ring-4 hover:ring-gray-300/90 active:ring-gray-400 duration-300 w-10 h-10 rounded-md bg-gray-700/90 hover:bg-gray-700 drop-shadow-sm"
      >
        <FaBell className="text-white w-4 h-4" />
        <div className="w-3 h-3 rounded-full bg-green animate-pulse absolute inline-flex top-[-3px] right-[-3px]"></div>
      </Link>
    </div>
  );
};

export default UserAppBar;
