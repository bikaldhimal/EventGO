import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GoogleRole = () => {
  let navigate = useNavigate();
  const [role, setRole] = useState("");
  const { id } = useParams();

  const handleEmptyFields = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error("Please select a role", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      handleEmptyFields;
    }
    axios
      .patch("/user/update", {
        id,
        role,
      })
      .then((response) => {
        if (response.data.status === 200) {
          console.log(response.data);
          localStorage.setItem("role", response.data.user.role);
          localStorage.setItem("token", id);
          localStorage.setItem("name", response.data.user.name);
          localStorage.setItem("address", response.data.user.address);
          localStorage.setItem("description", response.data.user.description);
          localStorage.setItem("role", response.data.user.role);
          localStorage.setItem("isActive", response.data.user.isActive);
          console.log(response.data);
          if (response.data.user.role === "actor") return navigate("/actor");
          if (response.data.user.role === "manager")
            return navigate("/manager");
          if (response.data.user.role === "user") return navigate("/user");
          if (response.data.user.role === "admin") return navigate("/admin");
          alert("Successfully updated");
          console.log("User Updated Successfully");
        } else {
          alert("Update failed");
          console.log("User Update failed");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 2000,
          toastId: "empty-fields",
        });
      });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="p-20 drop-shadow-md border-2 border-black rounded-lg">
          <h3 className="text-lg font-medium">Select a Role</h3>
          <hr className="mb-5 border-gray-700" />
          <div className="flex items-center mb-2">
            <input
              checked={role === "user"}
              onChange={(e) => setRole(e.target.value)}
              id="default-radio-1"
              type="radio"
              value="user"
              name="role"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-[#777575] dark:text-gray-300"
            >
              I'm a User
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              checked={role === "actor"}
              onChange={(e) => setRole(e.target.value)}
              id="default-radio-2"
              type="radio"
              value="actor"
              name="role"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-[#777575] dark:text-gray-300"
            >
              I'm an artist
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              checked={role === "manager"}
              onChange={(e) => setRole(e.target.value)}
              id="default-radio-3"
              type="radio"
              value="manager"
              name="role"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-3"
              className="ml-2 text-sm font-medium text-[#777575] dark:text-gray-300"
            >
              I'm a manager
            </label>
          </div>
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="relative mt-5 inline-flex items-center justify-center px-10 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Set Role</span>
          </button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default GoogleRole;
