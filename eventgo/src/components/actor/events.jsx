import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "./../../axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("/event/show")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-col gap-5 font-montserrat overflow-hidden">
        <button
          disabled
          type="button"
          className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#1C64F2"
            />
          </svg>
          {/* Events */}
          Loading...
        </button>
        {/* Event Section */}
        <div className="grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-7 gap-4 scroll-auto">
          {events.map((event) => (
            <div
              key={event._id}
              className="flex flex-col relative group bg-gray-600/90 hover:bg-gray-600 text-white drop-shadow-md hover:drop-shadow-xl hover:z-50 rounded-md justify-between items-center text-center w-52 h-64 hover:scale-105 duration-300 overflow-hidden"
            >
              <div className="w-full h-[50%]">
                <img
                  src={event.image}
                  alt="event"
                  className="rounded-tl-md rounded-tr-md items-start object-cover w-full h-full hover:scale-105 duration-300"
                />
              </div>
              <div className="flex flex-col gap-2 text-center justify-center items-center w-full h-[50%]">
                <h3 className="text-sm text-[16px] text-white">
                  {event.title}
                </h3>
                <p className="text-sm font-light text-[0.7rem]">
                  {new Date(event.date).toLocaleDateString("en-US")}{" "}
                  {new Date(event.date).toLocaleString("en-US", {
                    date: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                  {/* Aug 22 2022, <span>8pm Onwards</span> */}
                </p>
                <p className="text-sm font-light text-[0.7rem]">
                  {event.venue}
                </p>
              </div>
              <div
                role="status"
                className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
              >
                <div className="group-hover:opacity-100 group-focus:opacity-100 opacity-0 transition duration-300 ease-in-out">
                  <button
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Request
                  </button>
                  <Link
                    to="/actor/event/ticket"
                    // type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    B Ticket
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* card end */}
        </div>
        <Outlet className="absolute place-self-center-center justify-self-center items-center" />
      </div>
    </>
  );
};

export default Events;
