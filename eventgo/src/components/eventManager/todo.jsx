import React from "react";
import { GrAdd } from "react-icons/gr";

const Todo = () => {
  return (
    <>
      <div className="flex justify-center items-center overflow-hidden bg-slate-50 p-10">
        <div className="flex flex-col justify-center items-center gap-5 bg-white max-w-2xl min-w-xl h-fit font-sans text-black px-5 py-5 rounded-md drop-shadow-lg">
          <h3 className="text-xl font-bold text-purple-700">Todo</h3>
          <form className="w-full flex mx-auto">
            <input
              type="text"
              className="text-title p-2.5 rounded-tl-lg rounded-bl-lg w-full border-purple-700 active:border-purple-700 hover:border-purple-700 focus:border-purple-700"
            />
            <button
              type="submit"
              className="flex justify-center items-center p-[0.1rem] w-14 hover:ring-1 hover:ring-purple-900 bg-purple-700/90 rounded-tr-lg rounded-br-lg text-3xl font-base text-white hover:bg-purple-700"
            >
              +
            </button>
          </form>

          <div className="flex flex-col gap-1 lg:gap-2 lg:h-[30rem] overflow-hidden overflow-y-auto overscroll-auto">
            {/* item */}
            <div className="flex flex-col sm:flex-col md:flex-row w-full justify-start items-center overflow-hidden gap-2 md:gap-5 p-2.5 bg-gray-200/50 rounded-lg lg:py-8 xl:py-8 2xl:py-8">
              <p className="text-gray-600 line-through decoration-purple-700 w-full whitespace-pre-wrap sm:whitespace-pre-wrap text-justify sm:w-full">
                Hello there how you doing? I am all good would you please tell
                me I love programming?
              </p>
              <div className="flex md:flex-row lg:flex-row gap-2">
                <button className="flex justify-center items-center bg-red-600/90 hover:bg-red-600 text-white p-2.5 text-sm rounded-md w-24">
                  Not Done
                </button>
                <button className="flex justify-center items-center bg-blue-600/90 hover:bg-blue-600 text-white p-2.5 w-24 text-sm rounded-md">
                  Done
                </button>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className="flex flex-col sm:flex-col md:flex-row w-full justify-start items-center overflow-hidden gap-2 md:gap-5 p-2.5 bg-gray-200/50 rounded-lg lg:py-8 xl:py-8 2xl:py-8">
              <p className="text-title decoration-purple-700 w-full whitespace-pre-wrap sm:whitespace-pre-wrap text-justify sm:w-full">
                Submit coursework in Aug 22, 2023
              </p>
              <div className="flex md:flex-row lg:flex-row gap-2">
                <button className="flex justify-center items-center bg-red-600/90 hover:bg-red-600 text-white p-2.5 text-sm rounded-md w-24">
                  Not Done
                </button>
                <button className="flex justify-center items-center bg-blue-600/90 hover:bg-blue-600 text-white p-2.5 w-24 text-sm rounded-md">
                  Done
                </button>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className="flex flex-col sm:flex-col md:flex-row w-full justify-start items-center overflow-hidden gap-2 md:gap-5 p-2.5 bg-gray-200/50 rounded-lg lg:py-8 xl:py-8 2xl:py-8">
              <p className="text-title decoration-purple-700 w-full whitespace-pre-wrap sm:whitespace-pre-wrap text-justify sm:w-full">
                Submit coursework in Aug 22, 2023
              </p>
              <div className="flex md:flex-row lg:flex-row gap-2">
                <button className="flex justify-center items-center bg-red-600/90 hover:bg-red-600 text-white p-2.5 text-sm rounded-md w-24">
                  Not Done
                </button>
                <button className="flex justify-center items-center bg-blue-600/90 hover:bg-blue-600 text-white p-2.5 w-24 text-sm rounded-md">
                  Done
                </button>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className="flex flex-col sm:flex-col md:flex-row w-full justify-start items-center overflow-hidden gap-2 md:gap-5 p-2.5 bg-gray-200/50 rounded-lg lg:py-8 xl:py-8 2xl:py-8">
              <p className="text-title decoration-purple-700 w-full whitespace-pre-wrap sm:whitespace-pre-wrap text-justify sm:w-full">
                Submit coursework in Aug 22, 2023
              </p>
              <div className="flex md:flex-row lg:flex-row gap-2">
                <button className="flex justify-center items-center bg-red-600/90 hover:bg-red-600 text-white p-2.5 text-sm rounded-md w-24">
                  Not Done
                </button>
                <button className="flex justify-center items-center bg-blue-600/90 hover:bg-blue-600 text-white p-2.5 w-24 text-sm rounded-md">
                  Done
                </button>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className="flex flex-col sm:flex-col md:flex-row w-full justify-start items-center overflow-hidden gap-2 md:gap-5 p-2.5 bg-gray-200/50 rounded-lg lg:py-8 xl:py-8 2xl:py-8">
              <p className="text-title decoration-purple-700 w-full whitespace-pre-wrap sm:whitespace-pre-wrap text-justify sm:w-full">
                Submit coursework in Aug 22, 2023
              </p>
              <div className="flex md:flex-row lg:flex-row gap-2">
                <button className="flex justify-center items-center bg-red-600/90 hover:bg-red-600 text-white p-2.5 text-sm rounded-md w-24">
                  Not Done
                </button>
                <button className="flex justify-center items-center bg-blue-600/90 hover:bg-blue-600 text-white p-2.5 w-24 text-sm rounded-md">
                  Done
                </button>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className="flex flex-col sm:flex-col md:flex-row w-full justify-start items-center overflow-hidden gap-2 md:gap-5 p-2.5 bg-gray-200/50 rounded-lg lg:py-8 xl:py-8 2xl:py-8">
              <p className="text-title decoration-purple-700 w-full whitespace-pre-wrap sm:whitespace-pre-wrap text-justify sm:w-full">
                Submit coursework in Aug 22, 2023
              </p>
              <div className="flex md:flex-row lg:flex-row gap-2">
                <button className="flex justify-center items-center bg-red-600/90 hover:bg-red-600 text-white p-2.5 text-sm rounded-md w-24">
                  Not Done
                </button>
                <button className="flex justify-center items-center bg-blue-600/90 hover:bg-blue-600 text-white p-2.5 w-24 text-sm rounded-md">
                  Done
                </button>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className="flex flex-col sm:flex-col md:flex-row w-full justify-start items-center overflow-hidden gap-2 md:gap-5 p-2.5 bg-gray-200/50 rounded-lg lg:py-8 xl:py-8 2xl:py-8">
              <p className="text-title decoration-purple-700 w-full whitespace-pre-wrap sm:whitespace-pre-wrap text-justify sm:w-full">
                Submit coursework in Aug 22, 2023
              </p>
              <div className="flex md:flex-row lg:flex-row gap-2">
                <button className="flex justify-center items-center bg-red-600/90 hover:bg-red-600 text-white p-2.5 text-sm rounded-md w-24">
                  Not Done
                </button>
                <button className="flex justify-center items-center bg-blue-600/90 hover:bg-blue-600 text-white p-2.5 w-24 text-sm rounded-md">
                  Done
                </button>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className="flex flex-col sm:flex-col md:flex-row w-full justify-start items-center overflow-hidden gap-2 md:gap-5 p-2.5 bg-gray-200/50 rounded-lg lg:py-8 xl:py-8 2xl:py-8">
              <p className="text-title decoration-purple-700 w-full whitespace-pre-wrap sm:whitespace-pre-wrap text-justify sm:w-full">
                Submit coursework in Aug 22, 2023
              </p>
              <div className="flex md:flex-row lg:flex-row gap-2">
                <button className="flex justify-center items-center bg-red-600/90 hover:bg-red-600 text-white p-2.5 text-sm rounded-md w-24">
                  Not Done
                </button>
                <button className="flex justify-center items-center bg-blue-600/90 hover:bg-blue-600 text-white p-2.5 w-24 text-sm rounded-md">
                  Done
                </button>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className="flex flex-col sm:flex-col md:flex-row w-full justify-start items-center overflow-hidden gap-2 md:gap-5 p-2.5 bg-gray-200/50 rounded-lg lg:py-8 xl:py-8 2xl:py-8">
              <p className="text-title decoration-purple-700 w-full whitespace-pre-wrap sm:whitespace-pre-wrap text-justify sm:w-full">
                Submit coursework in Aug 22, 2023
              </p>
              <div className="flex md:flex-row lg:flex-row gap-2">
                <button className="flex justify-center items-center bg-red-600/90 hover:bg-red-600 text-white p-2.5 text-sm rounded-md w-24">
                  Not Done
                </button>
                <button className="flex justify-center items-center bg-blue-600/90 hover:bg-blue-600 text-white p-2.5 w-24 text-sm rounded-md">
                  Done
                </button>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className="flex flex-col sm:flex-col md:flex-row w-full justify-start items-center overflow-hidden gap-2 md:gap-5 p-2.5 bg-gray-200/50 rounded-lg lg:py-8 xl:py-8 2xl:py-8">
              <p className="text-title decoration-purple-700 w-full whitespace-pre-wrap sm:whitespace-pre-wrap text-justify sm:w-full">
                Submit coursework in Aug 22, 2023
              </p>
              <div className="flex md:flex-row lg:flex-row gap-2">
                <button className="flex justify-center items-center bg-red-600/90 hover:bg-red-600 text-white p-2.5 text-sm rounded-md w-24">
                  Not Done
                </button>
                <button className="flex justify-center items-center bg-blue-600/90 hover:bg-blue-600 text-white p-2.5 w-24 text-sm rounded-md">
                  Done
                </button>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className="flex flex-col sm:flex-col md:flex-row w-full justify-start items-center overflow-hidden gap-2 md:gap-5 p-2.5 bg-gray-200/50 rounded-lg lg:py-8 xl:py-8 2xl:py-8">
              <p className="text-title decoration-purple-700 w-full whitespace-pre-wrap sm:whitespace-pre-wrap text-justify sm:w-full">
                Submit coursework in Aug 22, 2023
              </p>
              <div className="flex md:flex-row lg:flex-row gap-2">
                <button className="flex justify-center items-center bg-red-600/90 hover:bg-red-600 text-white p-2.5 text-sm rounded-md w-24">
                  Not Done
                </button>
                <button className="flex justify-center items-center bg-blue-600/90 hover:bg-blue-600 text-white p-2.5 w-24 text-sm rounded-md">
                  Done
                </button>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className="flex flex-col sm:flex-col md:flex-row w-full justify-start items-center overflow-hidden gap-2 md:gap-5 p-2.5 bg-gray-200/50 rounded-lg lg:py-8 xl:py-8 2xl:py-8">
              <p className="text-title decoration-purple-700 w-full whitespace-pre-wrap sm:whitespace-pre-wrap text-justify sm:w-full">
                Submit coursework in Aug 22, 2023
              </p>
              <div className="flex md:flex-row lg:flex-row gap-2">
                <button className="flex justify-center items-center bg-red-600/90 hover:bg-red-600 text-white p-2.5 text-sm rounded-md w-24">
                  Not Done
                </button>
                <button className="flex justify-center items-center bg-blue-600/90 hover:bg-blue-600 text-white p-2.5 w-24 text-sm rounded-md">
                  Done
                </button>
              </div>
            </div>
            {/* item end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
