import React, { useState, useEffect } from "react";
import axios from "./../../axios";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const resetFields = () => {
    setImage(null);
    setName("");
    setAddress("");
    setDescription("");
  };

  const resetPasswordFields = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  //  Update the profile
  const updateProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("description", description);
    formData.append("image", image);
    console.log(formData.image);

    axios
      .put(`/user/update/${localStorage.getItem("id")}`, formData)
      .then((response) => {
        const data = response.data;
        console.log(data);
        localStorage.setItem("name", data.name);
        localStorage.setItem("addressa", data.address);
        localStorage.setItem("description", data.description);
        localStorage.setItem("image", data.image);
        resetFields();
        alert("Profile updated successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // update password
  const updatePassword = (e) => {
    e.preventDefault();
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      handleEmptyFields();
    }
    if (newPassword !== confirmNewPassword) {
      handleUnMatched();
    }

    axios
      .put(`/user/update-password/${localStorage.getItem("id")}`, {
        oldPassword,
        newPassword,
        confirmNewPassword,
      })
      .then((response) => {
        handleSuccess();
        resetPasswordFields();
      })
      .catch((error) => {
        console.error(error);
        handleError();
      });
  };

  const handleEmptyFields = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error("Fields are empty!", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
      });
    }
  };

  const handleSuccess = () => {
    if (!toast.isActive("empty-fields")) {
      toast.success("Password updated successfully", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty",
      });
    }
  };

  const handleError = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
      });
    }
  };

  const handleUnMatched = () => {
    if (!toast.isActive("empty-fields")) {
      toast.error("password-not-matching", {
        position: "top-right",
        autoClose: 2000,
        toastId: "empty-fields",
      });
    }
  };

  return (
    <>
      <div className="w-full flex flex-col sm:flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row gap-10">
        <form className="flex flex-col justify-center items-center max-w-lg min-w-lg bg-white shadow-lg py-10 px-10 gap-2 rounded-lg">
          <div className="flex justify-center items-center w-24 h-24 rounded-full shadow-inner drop-shadow-sm">
            <img
              src={localStorage.getItem("image")}
              alt="user image"
              className="w-20 h-20 rounded-full"
            />
          </div>

          <div className="flex flex-col justify-center gap-2 mt-2 items-center text-center">
            <h1 className="text-xl font-semibold text-gray-900 mb-2">
              {localStorage.getItem("name")}
            </h1>
            <p className="text-sm text-gray-500 text-center font-light">
              {localStorage.getItem("description")}
            </p>
          </div>

          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            className="block w-full text-sm mt-5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>

          <div className="w-full">
            <div className="relative mt-5">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Name
              </label>
            </div>
            <div className="relative mt-5">
              <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Address
              </label>
            </div>

            <label className="block mb-2 mt-2 text-sm font-medium text-gray-500 dark:text-white">
              Description
            </label>
            <textarea
              id="message"
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={(e) => {
              updateProfile(e);
            }}
            className="relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Save
            </span>
          </button>
        </form>
        {/* Change password */}
        <form className="flex flex-col gap-3 bg-white shadow-lg w-[500px] h-fit rounded-md px-10 py-10">
          <label>Change Password</label>
          <div className="relative">
            <input
              type="password"
              onChange={(e) => setOldPassword(e.target.value)}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Enter old password
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Enter new password
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Re-enter new password
            </label>
          </div>
          <Button
            type="submit"
            onClick={(e) => updatePassword(e)}
            variant="contained"
            className="text-white w-fit bg-blue-700/80"
          >
            Update
          </Button>
        </form>
      </div>
      <ToastContainer />
    </>
    // <>
    //   <div className="w-full flex flex-col sm:flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row gap-10">
    //     <div className="flex flex-col justify-center items-center max-w-lg min-w-lg bg-white shadow-lg py-10 px-10 gap-2 rounded-lg">
    //       <div className="flex justify-center items-center w-24 h-24 rounded-full shadow-inner drop-shadow-sm">
    //         <img
    //           src={image}
    //           alt="user image"
    //           className="w-20 h-20 rounded-full"
    //         />
    //       </div>

    //       <div className="flex flex-col justify-center gap-2 mt-2 items-center text-center">
    //         <h1 className="text-xl font-semibold text-gray-900 mb-2">{name}</h1>
    //         <p className="text-sm text-gray-500 text-center font-light">
    //           {description}
    //         </p>
    //       </div>

    //       <input
    //         onChange={(e) => setImage(e.target.files[0])}
    //         type="file"
    //         className="block w-full text-sm mt-5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    //         aria-describedby="file_input_help"
    //       />
    //       <p
    //         className="mt-1 text-sm text-gray-500 dark:text-gray-300"
    //         id="file_input_help"
    //       >
    //         SVG, PNG, JPG or GIF (MAX. 800x400px).
    //       </p>

    //       <div className="w-full">
    //         <div className="relative mt-5">
    //           <input
    //             type="text"
    //             onChange={(e) => setName(e.target.value)}
    //             className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //             placeholder=""
    //           />
    //           <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
    //             Name
    //           </label>
    //         </div>
    //         <div className="relative mt-5">
    //           <input
    //             type="text"
    //             onChange={(e) => setAddress(e.target.value)}
    //             id="floating_outlined"
    //             className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //             placeholder=""
    //           />
    //           <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
    //             Address
    //           </label>
    //         </div>

    //         <label className="block mb-2 mt-2 text-sm font-medium text-gray-500 dark:text-white">
    //           Description
    //         </label>
    //         <textarea
    //           id="message"
    //           onChange={(e) => setDescription(e.target.value)}
    //           rows="4"
    //           className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           placeholder="Write your thoughts here..."
    //         ></textarea>
    //       </div>
    //       <button
    //         onClick={(e) => {
    //           updateProfile(e);
    //         }}
    //         className="relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
    //       >
    //         <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    //           Save
    //         </span>
    //       </button>
    //     </div>
    //     {/* Change password */}
    //     <div className="flex flex-col gap-3 bg-white shadow-lg w-[500px] h-fit rounded-md px-10 py-10">
    //       <label>Change Password</label>
    //       <div className="relative">
    //         <input
    //           type="password"
    //           className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //         />
    //         <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
    //           Enter old password
    //         </label>
    //       </div>
    //       <div className="relative">
    //         <input
    //           type="password"
    //           className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //         />
    //         <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
    //           Enter new password
    //         </label>
    //       </div>
    //       <div className="relative">
    //         <input
    //           type="password"
    //           className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //         />
    //         <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
    //           Re-enter new password
    //         </label>
    //       </div>
    //       <Button
    //         variant="contained"
    //         className="text-white w-fit bg-blue-700/80"
    //       >
    //         Update
    //       </Button>
    //     </div>
    //   </div>
    // </>
  );
};

export default UserProfile;
