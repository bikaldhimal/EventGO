import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdSend } from "react-icons/md";

const Help = () => {
  const [showHide, setShowHide] = useState(false);
  return (
    <>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Support
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Provide feedback and support to EventGO
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Please do not hesitate to contact us if you have any queries
            regarding the application features, layout, and functionalities. So
            that we can improve our productivity in future updates.
          </p>
          <a
            href="#"
            onClick={() => setShowHide((prev) => !prev)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Provide Feedback
            <svg
              className="w-3 h-3 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          {/* feedback form */}
          {showHide && (
            <form className="feedbackForm flex flex-col justify-start items-start mt-3 gap-3">
              {/* <div className="relative w-full">
                <textarea
                  type="text"
                  rows="6"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your feedback here..."
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                ></button>
              </div>
              <button
                type="submit"
                className="inline-flex justify-start items-center gap-2 py-2.5 px-3 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <MdSend />
                Send
              </button> */}
              <div className="flex items-center w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                <button
                  type="button"
                  className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Upload image</span>
                </button>
                <textarea
                  id="chat"
                  rows="6"
                  className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your feedback here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex justify-start items-center gap-2 py-2.5 px-3 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <MdSend />
                Send
              </button>
            </form>
          )}
          {/* feedback form end */}
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Overview
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer hover:underline hover:text-blue-700 hover:decoration-blue-700">
            <Link to="/manager/overview">
              View and analyze the dashboard for your events
            </Link>
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            The overview section contains the dashboard for analyzing the events
            and their related attributes.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Events
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer hover:underline hover:text-blue-700 hover:decoration-blue-700">
            <Link to="/manager/event/add">
              Create and manipulate your events
            </Link>
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            The events section assist you creating, analyzing, and manipulating
            your events along with Todo
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Artist
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer hover:underline hover:text-blue-700 hover:decoration-blue-700">
            <Link to="/manager/artist">View available artist</Link>
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            The Artist section contains the list of artists you can follow or
            start converstaion with.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Message
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer hover:underline hover:text-blue-700 hover:decoration-blue-700">
            <Link to="/manager/message">
              Start conversations with event manager and artist
            </Link>
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            The message section contains the conversation with the event manager
            and artist and sell all the available users.
          </p>
        </li>
      </ol>
    </>
  );
};

export default Help;
