import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "./../../axios";
import { GrRefresh } from "react-icons/gr";

const ManagerRequests = () => {
  const [requests, setRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5; // number of items to show per page
  const [flag, setFlag] = useState(false);

  const dateOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  // Get requests sent by artists
  useEffect(() => {
    axios
      .get(`/event/request/${localStorage.getItem("id")}`)
      .then((response) => {
        setRequests(response.data);
        console.log("Response:", response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [flag]);

  const handleRefresh = () => {
    if (flag) {
      if (flag === true) {
        setFlag(false);
      } else {
        setFlag(true);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        {/* Requests */}
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <h3 className="text-base mb-2 text-gray-700">Requests</h3>
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Event Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {requests
                      .slice(
                        currentPage * pageSize,
                        (currentPage + 1) * pageSize
                      )
                      .map((request, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {request.eventName}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {new Date(request.date).toLocaleDateString(
                                "en-US",
                                dateOptions
                              )}
                            </div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
                            <div
                              className={`text-sm ${
                                request.status === "pending"
                                  ? "text-yellow-500"
                                  : request.status === "accepted"
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >
                              {request.status}
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={Math.ceil(requests.length / pageSize)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName={"flex justify-center space-x-4 text-sm"}
          pageClassName={"bg-gray-200 px-3 py-1 rounded"}
          activeClassName={"bg-blue-500 text-white px-3 py-1 rounded"}
          previousClassName={"bg-gray-200 px-3 py-1 rounded"}
          nextClassName={"bg-gray-200 px-3 py-1 rounded"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
          previousLinkClassName={"block w-full h-full"}
          nextLinkClassName={"block w-full h-full"}
        />

        {/* Invitation */}
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="flex justify-between text-gray-700 mb-2">
                <h3 className="text-base">Invitations</h3>
                <div
                  onClick={() => handleRefresh()}
                  className="flex gap-1 text-sm items-center hover: cursor-pointer hover:text-gray-500"
                >
                  <GrRefresh />
                  <p>Refresh</p>
                </div>
              </div>
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Event Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Requested By
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {requests.map((request, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {request.eventTitle}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {request.artistName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {new Date(request.requestDate).toLocaleDateString(
                              "en-US",
                              dateOptions
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
                          <div
                            className={`text-sm ${
                              request.status === "pending"
                                ? "text-yellow-500"
                                : request.status === "accepted"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {request.status}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="mr-2 bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded">
                            Accept
                          </button>
                          <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">
                            Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerRequests;
