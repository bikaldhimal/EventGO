import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const ViewEvent = () => {
  return (
    <>
      <p className="text-sm font-medium mb-3 inline-flex justify-start w-full">
        Event Count: 15
      </p>
      <div className="container mx-auto h-[46rem] overflow-hidden overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1617136785693-54b279bddfeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  Gala Music Award 2023
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2154&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  MTV Tour
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2220&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  World Dance Champion
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  Kripa Unplugged
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2480&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  Holi 2k23
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  Food Festival
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1648179587771-b31e9eb33ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  WorldCup 2023
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  Friday Party Night
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1499754162586-08f451261482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  Basketball 2024
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  Grand Meeting
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2318&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  Cine Event
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  DJ Snake
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1553005746-9245ba190489?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  Volleyball Championship
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1640163561346-7778a2edf353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  Hackathon 2024
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover">
            <div className="w-full h-64 group duration-300 relative">
              <img
                src="https://images.unsplash.com/photo-1526314149856-d8cf115d62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80"
                alt="event"
                className="object-cover w-full h-full group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
              />
              <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                  Fit Mania
                </h4>
                <div className="flex-gap-2 w-full justify-center items-center hidden group-hover:flex group-hover:mt-10 group:hover-grayscale-0">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-[#4285F4]/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-[#4285F4]/50 hover:scale-102 active:bg-blue/45 text-white"
                  >
                    <AiFillEdit />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                  >
                    <RiDeleteBin6Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
            3
          </div>
          <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
            4
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ViewEvent;
