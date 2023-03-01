import React from "react";
// import { Link } from "react-router-dom";
import { SiEventbrite, SiGoogleanalytics } from "react-icons/si";

const AdminDashboard = () => {
  return (
    <>
      <div className="container mx-auto min-h-screen overflow-hidden overflow-y-auto bg-slate-50 p-5 rounded-md">
        <div className="grid grid-flow-row gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* card */}
          <div className="bg-white shadow-md shadow-gray-300 rounded-lg relative w-fit mt-8">
            <div className="flex justify-center items-center absolute -top-5 left-4 bg-blue-500/80 p-6 rounded-2xl shadow-lg shadow-blue-500/50 text-white w-fit">
              <SiEventbrite />
            </div>
            <div className="flex flex-col justify-end w-full items-end pl-48 overflow-hidden pr-4 pt-4 gap-1">
              <p className="text-sm font-light text-end tracking-wide">
                Total Events
              </p>
              <p className="text-xl font-medium text-end tracking-wide">2500</p>
            </div>
            <hr className="mt-5" />
            <div className="flex justify-start items-center py-2 pl-1">
              <p className="p-3 text-green-500 text-md font-medium">+55%</p>
              <p>than last week</p>
            </div>
          </div>
          {/* card end */}
          {/* card */}
          <div className="bg-white shadow-md shadow-gray-300 rounded-lg relative w-fit mt-8">
            <div className="flex justify-center items-center absolute -top-5 left-4 bg-amber-500/80 p-6 rounded-2xl shadow-lg shadow-amber-500/50 text-white w-fit">
              <SiGoogleanalytics />
            </div>
            <div className="flex flex-col justify-end w-full items-end pl-48 overflow-hidden pr-4 pt-4 gap-1">
              <p className="text-sm font-light text-end tracking-wide">
                Total Sales
              </p>
              <p className="text-xl font-medium text-end tracking-wide">
                $10900
              </p>
            </div>
            <hr className="mt-5" />
            <div className="flex justify-start items-center py-2 pl-1">
              <p className="p-3 text-green-500 text-md font-medium">+55%</p>
              <p>than last week</p>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
