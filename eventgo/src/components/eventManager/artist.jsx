import React, { useState, useEffect } from "react";
import axios from "./../../axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Artist = () => {
  let navigate = useNavigate();
  const [artists, setArtists] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [events, setEvents] = useState([]);
  const [flag, setFlag] = useState(false);
  const userId = localStorage.getItem("id");
  const [selectedArtist, setSelectedArtist] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  // API call to get all events
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

  // API call to get all artists
  useEffect(() => {
    axios
      .get("/user/artists")
      .then((response) => {
        setArtists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInviteClick = (artistId) => {
    setShowPopup(true); // show popup when invite button is clicked
    setSelectedArtist(artistId);
    console.log(artistId);
    if (flag === true) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const handleSelectedEvent = (eventId) => {
    setSelectedEvent(eventId);
    console.log(eventId);
  };

  // api call to invite artist
  const handleInvite = () => {
    console.log(selectedArtist);
    console.log(selectedEvent);
    console.log(localStorage.getItem("id"));
    if (selectedEvent) {
      axios
        .post("/event/invite-artist", {
          artistId: selectedArtist,
          managerId: localStorage.getItem("id"),
          eventId: selectedEvent,
        })
        .then((response) => {
          console.log(response.data);
          console.log(selectedArtist);
          console.log(selectedEvent);
          if (response.status === 200) {
            navigate("/manager/invite");
          }
        })
        .catch((error) => {
          handleError();
          console.log(error);
        });
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false); // hide popup when close button is clicked
  };

  const handleError = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error("Already requested this artist for this event", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
      });
    }
  };

  return (
    <>
      <div className="container mx-auto h-[50rem] overflow-hidden overflow-y-auto bg-slate-50 p-5 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* card */}
          {artists.map((artist) => (
            <div
              key={artist._id}
              className="container max-w-lg bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out overflow-y-scroll"
            >
              <div className="h-2/4 sm:h-64 overflow-hidden">
                <img
                  className="w-full rounded-t"
                  src={artists.image}
                  alt={artists.name}
                />
              </div>
              <div className="flex justify-start px-5 -mt-12 mb-5">
                <span clspanss="block relative h-32 w-32">
                  <img
                    alt={artist.name}
                    src={artist.image}
                    className="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1"
                  />
                </span>
              </div>
              <div className="">
                <div className="px-7 mb-8">
                  <h2 className="text-3xl font-bold text-green-800 dark:text-gray-300">
                    {artist.name}
                  </h2>
                  <p className="text-gray-400 mt-2 dark:text-gray-400">
                    {artist.role}
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-justify">
                    {artist.description}
                  </p>
                  <div
                    onClick={() => handleInviteClick(artist._id)}
                    className="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200"
                  >
                    Invite
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* card end */}
        </div>
      </div>

      {/* popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="relative bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Select an event</h2>
            <ul className="space-y-2">
              {events.map((event) => (
                <li key={event._id} className="flex items-center">
                  <input
                    type="radio"
                    id={event._id}
                    name="selectedEvent"
                    value={event._id}
                    className="h-4 w-4 mr-2"
                  />
                  <label
                    onClick={() => handleSelectedEvent(event._id)}
                    htmlFor={event._id}
                  >
                    {event.title}
                  </label>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button
                onClick={handlePopupClose}
                className="px-4 py-2 bg-gray-700 text-white rounded-md"
              >
                Close
              </button>
              <button
                onClick={() => handleInvite()}
                className="ml-4 px-4 py-2 bg-green-700 text-white rounded-md"
              >
                Invite
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Artist;
