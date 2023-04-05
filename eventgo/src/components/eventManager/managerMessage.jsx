import React, { useState, useEffect } from "react";
import axios from "./../../axios";
import { Link, useNavigate } from "react-router-dom";
import { storeManager } from "./store";

const ManagerMessage = () => {
  let navigate = useNavigate();
  const [artists, setArtists] = useState([]);
  const [users, setUsers] = useState([]);
  const setReceiver = storeManager((state) => state.setReceiver);
  const receiver = storeManager((state) => state.receiver);
  const getMessage = storeManager((state) => state.getMessage);

  // Get all artists
  useEffect(() => {
    axios
      .get("/user/artists")
      .then((response) => {
        setArtists(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // Get all users
  useEffect(() => {
    axios
      .get("/user/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleActor = (actorId) => {
    setReceiver(actorId);
    console.log(actorId);
    getMessage();
    if (receiver) {
      navigate("/manager/chat");
    }
  };

  const handleUser = (userId) => {
    setReceiver(userId);
    console.log(userId);
    getMessage();
    if (receiver) {
      navigate("/manager/chat");
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5">
        {/* For artists */}
        <div className="min-w-md w-full bg-white shadow px-10 py-10">
          <h3 className="text-title text-lg font-semibold">Artists</h3>
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="flex flex-col h-[30rem] sm:h-[40rem] gap-5 w-full overflow-hidden overflow-y-scroll scroll-smooth">
            <ul
              role="list"
              className="max-w-sm divide-y divide-gray-200 dark:divide-gray-700"
            >
              {artists.map((artist) => {
                return (
                  <div
                    key={artist._id}
                    onClick={() => handleActor(artist._id)}
                    className="flex flex-row gap-5 hover:cursor-pointer"
                  >
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1676481945425-621e73a056ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
                            alt="Neil image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                            {artist.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {artist.email}
                          </p>
                        </div>
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                          <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                          {artist.isActive}
                        </span>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>

        {/* For users */}
        <div className="min-w-md w-full bg-white shadow px-10 py-10">
          <h3 className="text-title text-lg font-semibold">Users</h3>
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="flex flex-col h-[30rem] sm:h-[40rem] gap-5 w-full overflow-hidden overflow-y-scroll scroll-smooth">
            <ul
              role="list"
              className="max-w-sm divide-y divide-gray-200 dark:divide-gray-700"
            >
              {users.map((user) => {
                return (
                  <div
                    key={user._id}
                    onClick={() => handleUser(user._id)}
                    className="flex flex-row gap-5 hover:cursor-pointer"
                  >
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1676481945425-621e73a056ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
                            alt="Neil image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                            {user.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {user.email}
                          </p>
                        </div>
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                          <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                          {user.isActive}
                        </span>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerMessage;
