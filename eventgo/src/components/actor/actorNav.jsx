import React from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "./../../axios";
import { HiMenuAlt3, HiUserGroup } from "react-icons/hi";
import { SiEventbrite } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { MdMessage, MdOutlineHelp } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import AppBar from "./appBar";

const ActorNav = () => {
  const menus = [
    { name: "event", link: "/actor", icon: SiEventbrite },
    { name: "profile", link: "/actor/profile", icon: FaUserAlt },
    { name: "follower", link: "/actor/follower", icon: HiUserGroup },
    { name: "message", link: "/actor/message", icon: MdMessage },
    { name: "help", link: "/actor/help", icon: MdOutlineHelp },
    { name: "logout", link: "/login", icon: RiLogoutCircleLine, margin: true },
  ];

  const [open, setOpen] = React.useState(true);

  const handleLogout = async (e) => {
    try {
      await axios.get("/user/logout");
      // localStorage.clear();
      // console.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="flex gap-3 z-50">
        <div
          className={`px-4 bg-[#0e0e0e] min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500 text-gray-100`}
        >
          <div className="py-3 flex justify-end sticky">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                onClick={menu?.name === "logout" ? handleLogout() : undefined}
                className={` ${
                  menu?.margin && "mt-10 hover:bg-red-400/30"
                } group flex items-center gap-3.5 text-sm font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white z-50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        <div className="m-3 text-xl text-gray-900 font-semibold static w-[100vw]">
          <AppBar />
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default ActorNav;
