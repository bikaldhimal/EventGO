import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "./../../axios";

const Request = () => {
  const [requests, setRequests] = useState([]);
  const [invites, setInvites] = useState([]);
  const [flag, setFlag] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5; // number of items to show per page

  const dateOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  // get invites sent by managers
  useEffect(() => {
    axios
      .get(`/event/invite-artist/artist/${localStorage.getItem("id")}`)
      .then((response) => {
        setInvites(response?.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [flag]);

  // Get requests sent by artists to manager
  useEffect(() => {
    axios
      .get(`/event/request/${localStorage.getItem("id")}`)
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [flag]);

  // update status
  const acceptRequest = (id) => {
    console.log(id);
    axios
      .post(`/event/update-request/${id}`, {
        status: "accepted",
      })
      .then((response) => {
        console.log("Response:", response);
        if (flag === true) {
          setFlag(false);
        } else {
          setFlag(true);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const declineRequest = (id) => {
    axios
      .post(`/event/update-request/${id}`, {
        status: "rejected",
      })
      .then((response) => {
        console.log("Response:", response);
        if (flag === true) {
          setFlag(false);
        } else {
          setFlag(true);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleRefresh = () => {
    if (flag === true) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        {/* Requests */}
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <h3 className="text-base mb-2 text-gray-700">Requests Sent</h3>
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
                        Organizer
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Venue
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
                              {request.eventTitle}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {request.managerName}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {request.eventVenue}
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
                    {invites.map((invite, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {invite.eventTitle}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {invite.managerName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {new Date(invite.date).toLocaleDateString(
                              "en-US",
                              dateOptions
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
                          <div
                            className={`text-sm ${
                              invite.status === "pending"
                                ? "text-yellow-500"
                                : invite.status === "accepted"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {invite.status}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => acceptRequest(invite._id)}
                            className={`mr-2 bg-green-500 ${
                              invite.status !== "pending"
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-green-600"
                            } text-white py-1 px-2 rounded`}
                            disabled={invite.status !== "pending"}
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => declineRequest(invite._id)}
                            className={`bg-red-500 ${
                              invite.status !== "pending"
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-red-600"
                            } text-white py-1 px-2 rounded`}
                            disabled={invite.status !== "pending"}
                          >
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
        {/* Invitation Ends */}
      </div>
    </>
  );
};

export default Request;
