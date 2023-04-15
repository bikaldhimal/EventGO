import React, { useState, useEffect } from "react";
import axios from "./../../axios";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "./store";

const UserMessage = () => {
  let navigate = useNavigate();
  const [managers, setManagers] = useState([]);
  const setReceiver = storeUser((state) => state.setReceiver);
  const receiver = storeUser((state) => state.receiver);
  const getMessage = storeUser((state) => state.getMessage);

  useEffect(() => {
    axios
      .get("/user/managers")
      .then((response) => {
        setManagers(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleButtonClick = (managerId) => {
    setReceiver(managerId);
    getMessage();
    navigate("/actor/chat");
    // Update the localStorage with the current user's name and the manager's name
    const currentUser = localStorage.getItem("name"); // Replace with the current user's name
    const managerName = managers.find(
      (manager) => manager._id === managerId
    ).name;
    localStorage.setItem("convo", `${currentUser} - ${managerName}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-9">
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Available Managers
            </h5>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto"
            >
              {managers.map((manager) => {
                return (
                  <li key={manager._id} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {manager.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {manager.email}
                        </p>
                      </div>
                      <button
                        onClick={() => handleButtonClick(manager._id)}
                        className="inline-flex items-center text-base font-semibold text-gray-900 hover:text-blue-700 dark:text-white cursor-pointer"
                      >
                        Message
                      </button>
                      <p></p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMessage;
