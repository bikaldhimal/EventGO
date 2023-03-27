import React, { useState, useEffect } from "react";
import axios from "./../../axios";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const ViewEvent = () => {
  const userId = localStorage.getItem("id");
  const [events, setEvents] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios
      .get(`/event/${userId}`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [flag]);

  // Delete event
  const deleteEvent = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirmDelete) {
      axios
        .delete(`/event/${id}`)
        .then((response) => {
          if (flag === true) {
            setFlag(false);
          } else {
            setFlag(true);
          }
          alert(response.data.message);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  // Count the number of events
  const eventCount = events.length;

  return (
    <>
      <p className="text-sm font-medium mb-3 inline-flex justify-start w-full">
        Event Count: {eventCount}
      </p>
      <div className="container mx-auto h-[46rem] overflow-hidden overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="flex justify-start text-xl border-2 border-gray-300 rounded-xl bg-gray-100 group relative overflow-hidden object-cover"
            >
              <div className="w-full h-64 group duration-300 relative">
                <img
                  src={event.image}
                  alt="event"
                  className="object-cover w-full h-full scale-105 group-hover:grayscale group-hover:scale-110 duration-200 top-0 right-0 bottom-0 left-0"
                />
                <div className="flex absolute justify-center bottom-0 w-full h-10 group-hover:h-28 p-1 bg-gray-700/40 duration-200">
                  <h4 className="absolute flex justify-center items-center bg-blend-multiply text-white group-hover:text-2xl duration-200">
                    {event.title}
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
                      onClick={() => {
                        deleteEvent(event._id);
                      }}
                      className="inline-flex justify-center items-center gap-2 px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-red-500/0 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-red-500/50 hover:scale-102 active:bg-red-500/45 text-white"
                    >
                      <RiDeleteBin6Line />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewEvent;
