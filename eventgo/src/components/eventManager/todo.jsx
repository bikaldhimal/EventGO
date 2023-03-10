import React from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineDone } from "react-icons/md";

const Todo = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 overflow-hidden bg-slate-50 p-10">
        <form action="" className="flex items-center w-full max-w-4xl min-w-sm">
          <input
            type="text"
            className="w-full bg-white border border-slate-300 rounded-tl-md rounded-bl-md px-3 py-2 placeholder-gray-400 text-gray-700"
            placeholder="Enter your todo..."
          />
          <button
            type="submit"
            className="w-[5rem] bg-blue-500/90 hover:bg-blue-500 focus:border-blue-500 active:border-blue-500 text-white hover:border-[0.5px] hover:border-gray-200 rounded-tr-md rounded-br-md py-[0.19rem] text-3xl"
          >
            +
          </button>
        </form>
        <div className="flex flex-col gap-2 max-h-lg h-[40rem] overflow-hidden overflow-y-auto">
          <div className="flex flex-col justify-start items-start group lg:justify-between lg:items-center lg:flex-row text-justify bg-slate-100 max-w-4xl min-w-sm w-full rounded-md px-3 py-2 gap-3">
            <p>Hello there this is my todo for tomorrow</p>
            <div className="flex space-x-2">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <RxCross2 />
                </span>
                <span className="absolute flex items-center justify-center text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  No
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <MdOutlineDone />
                </span>
                <span className="absolute flex items-center justify-center w-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Yes
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start group lg:justify-between lg:items-center lg:flex-row text-justify bg-slate-100 max-w-4xl min-w-sm w-full rounded-md px-3 py-2 gap-3">
            <p className="line-through">
              Final year project submission is on April 19, 2023. Need to submit
              on time. Do not cross the deadline.
            </p>
            <div className="flex space-x-2">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <RxCross2 />
                </span>
                <span className="absolute flex items-center justify-center text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  No
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <MdOutlineDone />
                </span>
                <span className="absolute flex items-center justify-center w-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Yes
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start group lg:justify-between lg:items-center lg:flex-row text-justify bg-slate-100 max-w-4xl min-w-sm w-full rounded-md px-3 py-2 gap-3">
            <p>Hello there this is my todo for tomorrow</p>
            <div className="flex space-x-2">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <RxCross2 />
                </span>
                <span className="absolute flex items-center justify-center text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  No
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <MdOutlineDone />
                </span>
                <span className="absolute flex items-center justify-center w-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Yes
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start group lg:justify-between lg:items-center lg:flex-row text-justify bg-slate-100 max-w-4xl min-w-sm w-full rounded-md px-3 py-2 gap-3">
            <p className="line-through">
              Final year project submission is on April 19, 2023. Need to submit
              on time. Do not cross the deadline.
            </p>
            <div className="flex space-x-2">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <RxCross2 />
                </span>
                <span className="absolute flex items-center justify-center text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  No
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <MdOutlineDone />
                </span>
                <span className="absolute flex items-center justify-center w-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Yes
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start group lg:justify-between lg:items-center lg:flex-row text-justify bg-slate-100 max-w-4xl min-w-sm w-full rounded-md px-3 py-2 gap-3">
            <p>Hello there this is my todo for tomorrow</p>
            <div className="flex space-x-2">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <RxCross2 />
                </span>
                <span className="absolute flex items-center justify-center text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  No
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <MdOutlineDone />
                </span>
                <span className="absolute flex items-center justify-center w-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Yes
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start group lg:justify-between lg:items-center lg:flex-row text-justify bg-slate-100 max-w-4xl min-w-sm w-full rounded-md px-3 py-2 gap-3">
            <p className="line-through">
              Final year project submission is on April 19, 2023. Need to submit
              on time. Do not cross the deadline.
            </p>
            <div className="flex space-x-2">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <RxCross2 />
                </span>
                <span className="absolute flex items-center justify-center text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  No
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <MdOutlineDone />
                </span>
                <span className="absolute flex items-center justify-center w-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Yes
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start group lg:justify-between lg:items-center lg:flex-row text-justify bg-slate-100 max-w-4xl min-w-sm w-full rounded-md px-3 py-2 gap-3">
            <p>Hello there this is my todo for tomorrow</p>
            <div className="flex space-x-2">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <RxCross2 />
                </span>
                <span className="absolute flex items-center justify-center text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  No
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <MdOutlineDone />
                </span>
                <span className="absolute flex items-center justify-center w-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Yes
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start group lg:justify-between lg:items-center lg:flex-row text-justify bg-slate-100 max-w-4xl min-w-sm w-full rounded-md px-3 py-2 gap-3">
            <p className="line-through">
              Final year project submission is on April 19, 2023. Need to submit
              on time. Do not cross the deadline.
            </p>
            <div className="flex space-x-2">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <RxCross2 />
                </span>
                <span className="absolute flex items-center justify-center text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  No
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <MdOutlineDone />
                </span>
                <span className="absolute flex items-center justify-center w-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Yes
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start group lg:justify-between lg:items-center lg:flex-row text-justify bg-slate-100 max-w-4xl min-w-sm w-full rounded-md px-3 py-2 gap-3">
            <p>Hello there this is my todo for tomorrow</p>
            <div className="flex space-x-2">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <RxCross2 />
                </span>
                <span className="absolute flex items-center justify-center text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  No
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <MdOutlineDone />
                </span>
                <span className="absolute flex items-center justify-center w-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Yes
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start group lg:justify-between lg:items-center lg:flex-row text-justify bg-slate-100 max-w-4xl min-w-sm w-full rounded-md px-3 py-2 gap-3">
            <p className="line-through">
              Final year project submission is on April 19, 2023. Need to submit
              on time. Do not cross the deadline.
            </p>
            <div className="flex space-x-2">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <RxCross2 />
                </span>
                <span className="absolute flex items-center justify-center text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  No
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <MdOutlineDone />
                </span>
                <span className="absolute flex items-center justify-center w-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Yes
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start group lg:justify-between lg:items-center lg:flex-row text-justify bg-slate-100 max-w-4xl min-w-sm w-full rounded-md px-3 py-2 gap-3">
            <p>Hello there this is my todo for tomorrow</p>
            <div className="flex space-x-2">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <RxCross2 />
                </span>
                <span className="absolute flex items-center justify-center text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  No
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <MdOutlineDone />
                </span>
                <span className="absolute flex items-center justify-center w-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Yes
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start group lg:justify-between lg:items-center lg:flex-row text-justify bg-slate-100 max-w-4xl min-w-sm w-full rounded-md px-3 py-2 gap-3">
            <p className="line-through">
              Final year project submission is on April 19, 2023. Need to submit
              on time. Do not cross the deadline.
            </p>
            <div className="flex space-x-2">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                  <RxCross2 />
                </span>
                <span className="absolute flex items-center justify-center text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  No
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit px-1 h-10 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <MdOutlineDone />
                </span>
                <span className="absolute flex items-center justify-center w-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Yes
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
