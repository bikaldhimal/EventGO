import React, { useState, useEffect } from "react";
import axios from "./../../axios";
import { Link, useNavigate } from "react-router-dom";
import { GiCash } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const email = users.email;
  const [flag, setFlag] = useState(false);

  // Calculating all the amounts from the transaction records
  const totalAmount = payments.reduce((acc, payment) => {
    return acc + parseInt(payment.amount);
  }, 0);

  // Get all the users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/admin/users", { email });
        setUsers(response.data);
        navigate("/admin");
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
    const intervalId = setInterval(() => {
      fetchUsers();
    }, 10000); // Fetch users every 10 seconds

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [flag]);

  // Get all the payments
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get("/admin/payments");
        setPayments(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPayments();
    const intervalId = setInterval(() => {
      fetchPayments();
    }, 10000); // Fetch payments every 10 seconds

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [flag]);

  const handleSuccess = () => {
    if (!toast.isActive("empty-fields")) {
      toast.success("User deleted successfully", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty",
      });
    }
  };

  const handleError = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error("Server error", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
      });
    }
  };

  const handleDelete = (user, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the user: ${name}?`
    );
    if (confirmDelete) {
      axios
        .delete(`/admin/users/${user}`)
        .then((response) => {
          if (flag === false) {
            setFlag(true);
          } else {
            setFlag(false);
          }
          handleSuccess();
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          handleError();
        });
    }
  };

  const handleSuspend = (user) => {
    const updatedUser = { ...user, suspended: !user.suspended };
    axios
      .put(`/admin/users/${user._id}`, updatedUser)
      .then((response) => {
        if (flag === false) {
          setFlag(true);
        } else {
          setFlag(false);
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        handleError();
      });
  };

  const handleRefresh = () => {
    if (flag === false) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  return (
    <>
      <div className="container mx-auto min-h-screen overflow-hidden overflow-y-auto bg-slate-50 p-5 rounded-md">
        {/* <!-- Header --> */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold leading-tight text-gray-900">
              Admin Dashboard
            </h1>
          </div>
        </div>
        <div className="grid grid-flow-row gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* card */}
          <div className="bg-white shadow-md shadow-gray-300 rounded-lg relative w-fit mt-8">
            <div className="flex justify-center items-center absolute -top-5 left-4 bg-blue-500/80 p-4 rounded-2xl shadow-lg shadow-blue-500/50 text-white w-fit">
              <HiUsers className="h-8 w-8" />
            </div>
            <div className="flex flex-col justify-end w-full items-end pl-48 overflow-hidden pr-4 pt-4 gap-1">
              <p className="text-sm font-light text-end tracking-wide">
                Total Users
              </p>
              <p className="text-xl font-medium text-end tracking-wide">
                {users.length}
              </p>
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
            <div className="flex justify-center items-center absolute -top-5 left-4 bg-amber-500/80 p-4 rounded-2xl shadow-lg shadow-amber-500/50 text-white w-fit">
              <GiCash className="h-8 w-8" />
            </div>
            <div className="flex flex-col justify-end w-full items-end pl-48 overflow-hidden pr-4 pt-4 gap-1">
              <p className="text-sm font-light text-end tracking-wide">
                Total Sales
              </p>
              <p className="text-xl font-medium text-end tracking-wide">
                NPR. {totalAmount}
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

        {/* Showing available users */}
        <div className="flex flex-col">
          {/* <!-- Main Content --> */}
          <div className="flex-1 overflow-y-auto">
            <div className="container mx-auto py-8">
              <div className="my-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-700">Users</h2>
                  <h2
                    onClick={(e) => handleRefresh()}
                    className="text-sm font-light text-gray-600 cursor-pointer"
                  >
                    Refresh
                  </h2>
                </div>
                <table className="w-full bg-white shadow-md rounded my-6">
                  <thead className="border-b-2">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold text-gray-600">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left font-bold text-gray-600">
                        Email
                      </th>
                      <th className="px-6 py-4 text-left font-bold text-gray-600">
                        Role
                      </th>
                      <th className="px-6 py-4 text-left font-bold text-gray-600">
                        Active Status
                      </th>
                      <th className="px-6 py-4 text-left font-bold text-gray-600">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <!-- User Row --> */}
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b">
                          <div className="flex items-center">
                            <div className="">
                              <div className="text-sm font-medium text-gray-900">
                                {user.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b">
                          <div className="text-sm text-gray-900">
                            {user.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b">
                          <div className="text-sm text-gray-900">
                            {user.role}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b">
                          {user.isActive == true ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              active
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black">
                              inactive
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b">
                          <div className="flex items-center">
                            <div className="mr-4 xl:space-x-2 space-y-2">
                              <button
                                onClick={() => {
                                  handleSuspend(user);
                                }}
                                className={`${
                                  user.suspended
                                    ? "bg-green-500"
                                    : "bg-blue-500"
                                } hover:bg-${
                                  user.suspended ? "red-700" : "blue-700"
                                } text-white font-bold py-2 px-4 rounded`}
                              >
                                {user.suspended ? "Unsuspend" : "Suspend"}
                              </button>

                              <button
                                onClick={() => {
                                  handleDelete(user._id, user.name);
                                }}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                              >
                                Delete
                              </button>
                            </div>
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
      </div>
      <ToastContainer />
    </>
  );
};

export default AdminDashboard;
