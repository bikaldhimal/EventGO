import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { HiViewGrid } from "react-icons/hi";
import { RiTodoLine } from "react-icons/ri";

const ManagerEvent = () => {
  document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("defaultModalButton").click();
  });
  return (
    <>
      <div className="flex flex-col mb-5">
        <div className="inline-flex mb-5" role="group">
          <Link
            to="/manager/event/add"
            className="inline-flex items-center px-4 py-2 gap-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <MdAdd />
            Add
          </Link>
          <Link
            to="/manager/event/view"
            className="inline-flex items-center px-4 py-2 gap-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiViewGrid />
            View All
          </Link>
          <Link
            to="/manager/event/todo"
            className="inline-flex items-center px-4 py-2 gap-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <RiTodoLine />
            Todo
          </Link>
        </div>
        {/* Outlet */}
        <Outlet />
      </div>
    </>
  );
};

export default ManagerEvent;
