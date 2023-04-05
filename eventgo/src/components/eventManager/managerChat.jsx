import React, { useState } from "react";
import { Link } from "react-router-dom";
import { storeManager } from "./store";

const ManagerChat = () => {
  const setMessage = storeManager((state) => state.setMessage);
  const setFiles = storeManager((state) => state.setFiles);
  const sendMessage = storeManager((state) => state.sendMessage);
  // receiver
  const receiver = storeManager((state) => state.receiver);
  const setReceiver = storeManager((state) => state.setReceiver);

  const getMessage = storeManager((state) => state.getMessage);
  const messages = storeManager((state) => state.messages);
  console.log(messages);

  // save message to state so that it wont be lost when we refresh the page
  React.useEffect(() => {
    setReceiver(localStorage.getItem("receiver"));
    getMessage(); // save to local storage
  }, [getMessage]);

  // get message from local storage
  React.useEffect(() => {
    if (!localStorage.getItem("convo"))
      localStorage.setItem(
        "convo",
        `${messages?.[0]?.sender?.name} - ${messages?.[0]?.receiver?.name}`
      );

    // }
  }, []);

  return (
    <>
      <div className="min-w-md w-full bg-white shadow px-10 py-10">
        <Link to="/manager/message" className="text-lg font-semibold">
          {localStorage.getItem("convo")}
        </Link>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div
          className={`flex flex-col ${"items-en"} h-[30rem] sm:h-[40rem] gap-2 w-full overflow-hidden overflow-y-scroll scroll-smooth`}
        >
          {messages?.map(
            (message) =>
              message.message && (
                <div
                  key={message._id}
                  className={`flex ${
                    message?.receiver?._id === receiver && "justify-end"
                  }`}
                >
                  <div
                    // className="flex flex-row justify-start items-center gap-3 w-full px-5 py-2.5"
                    className={`flex ${
                      message?.receiver._id === receiver
                        ? "flex-row-reverse"
                        : "flex-row"
                    }  items-center gap-3 w-fit px-5`}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1559418162-0d309d8d10a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                      alt="manager image"
                      className="rounded-full w-8 h-8"
                    />
                    <p className="text-sm text-justify overflow-hidden font-normal px-3 py-2.5 max-w-[18rem] md:max-w-md lg:max-w-lg bg-gray-300/50 rounded-md">
                      {message.message && message.message}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>

        <form>
          <label className="sr-only">Your message</label>
          <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
            <input
              onChange={(e) => setFiles(e.target.files[0])}
              type="file"
              className="rounded-lg"
            />
            <textarea
              id="chat"
              rows="1"
              onChange={(e) => setMessage(e.target.value)}
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
            <button
              type="button"
              onClick={() => {
                sendMessage();
                getMessage();
              }}
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
              {/* <span className="sr-only">Send message</span> */}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ManagerChat;
