import React from "react";
import { Link } from "react-router-dom";
// import LogoWhite from "../../assets/images/LogoWhite.svg";
// import { TbArrowBackUp } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { CgEventbrite } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { RiLogoutCircleFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <nav className="w-fit min-h-screen justify-between items-center px-5 py-5 sticky z-50 top-0 left-0 bg-cream shadow-sm shadow-cream/10 font-montserrat">
        <div className="flex flex-col min-h-screen justify-between items-center">
          {/* logo */}
          <div className="flex flex-col gap-10">
            <p className="text-md font-serif select-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-tl_signup to-bl_signup">
              EventGO
            </p>
            {/* logo end */}
            {/* menu */}
            <div className="flex flex-col justify-center items-center gap-5">
              <Link className="flex justify-center items-center gap-2 text-gray-600 hover:text-slate-700">
                <FaUser className="w-3 h-3" />
                <h4 className="text-sm font-medium hidden">Profile</h4>
              </Link>
              <Link className="flex justify-center items-center gap-2 text-gray-600 hover:text-slate-700">
                <CgEventbrite className="w-3 h-3" />
                <h4 className="text-sm font-medium hidden">Event</h4>
              </Link>
              <Link className="flex justify-center items-center gap-2 text-gray-600 hover:text-slate-700">
                <FaUsers className="w-3 h-3" />
                <h4 className="text-sm font-medium hidden">Followers</h4>
              </Link>
              <Link className="flex justify-center items-center gap-2 text-gray-600 hover:text-slate-700">
                <BsChatLeftTextFill className="w-3 h-3" />
                <h4 className="text-sm font-medium hidden">Message</h4>
              </Link>
            </div>
            {/* menu end */}
          </div>
          <Link className="flex justify-center items-center bg-red-600/80 hover:bg-red-600/90 px-2 py-2 w-full rounded-md shadow-md text-white">
            <RiLogoutCircleFill className="w-3 h-3" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
