import React from "react";
import { Link } from "react-router-dom";
import { storeUser } from "./store";

const UserChat = () => {
  const setMessage = storeUser((state) => state.setMessage);
  const setFiles = storeUser((state) => state.setFiles);
  const sendMessage = storeUser((state) => state.sendMessage);
  // receiver
  const receiver = storeUser((state) => state.receiver);
  const setReceiver = storeUser((state) => state.setReceiver);

  const getMessage = storeUser((state) => state.getMessage);
  const messages = storeUser((state) => state.messages);

  const pollMessages = () => {
    getMessage();
  };

  // save message to state so that it wont be lost when we refresh the page
  React.useEffect(() => {
    setReceiver(localStorage.getItem("receiver"));
    getMessage();

    const intervalId = setInterval(pollMessages, 3000); // Poll every 3 seconds

    return () => {
      clearInterval(intervalId); // Clear interval when component is unmounted
    };
  }, [getMessage]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    sendMessage();
    getMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent newline
      handleSubmit(e);
    }
  };

  return (
    <>
      <div className="min-w-md w-full bg-white shadow px-10 py-10">
        <Link to="/manager/message" className="text-lg font-semibold">
          {localStorage.getItem("convo")}
        </Link>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex flex-col h-[30rem] sm:h-[40rem] gap-2 w-full overflow-hidden overflow-y-scroll scroll-smooth">
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

        <form onSubmit={handleSubmit}>
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
              onKeyPress={handleKeyPress}
              value={storeUser((state) => state.message)}
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
            <button
              type="submit"
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
            </button>
          </div>
        </form>
      </div>
      {/* <div className="min-w-md w-full bg-white shadow px-10 py-10">
        <Link to="/actor/message">Nepathya - Eva</Link>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex flex-col h-[30rem] sm:h-[40rem] gap-5 w-full overflow-hidden overflow-y-scroll scroll-smooth">
          <div className="flex flex-row justify-start items-center gap-3 w-full px-5 py-2.5">
            <img
              src="https://images.unsplash.com/photo-1621784563286-84f7646ef221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="user image"
              className="rounded-full w-8 h-8"
            />
            <p className="text-sm text-justify overflow-hidden font-normal px-3 py-2.5 max-w-[18rem] md:max-w-md lg:max-w-lg bg-gray-300/50 rounded-md">
              Hello there how you doing? ads faadsfasdf asdfasdfasd asdfasdfadf
              asdfasdfads asdkhflkajshdf aksdhf aksdhf asd kfhalksdjhf alksd
              falkjsdhf lakhsd flakhsd fkjas dfkjhasd kfljha skld faks ldfhlka
              hdslfkh
            </p>
          </div>
          <div className="flex flex-row justify-end items-center gap-3 w-full px-5 py-2.5">
            <p className="text-sm text-justify overflow-hidden font-normal px-3 py-2.5 max-w-[18rem] md:max-w-md lg:max-w-lg bg-gray-300/80 rounded-md">
              Hello there how you doing? ads faadsfasdf asdfasdfasd asdfasdfadf
              asdfasdfads asdkhflkajshdf aksdhf aksdhf asd kfhalksdjhf alksd
              falkjsdhf lakhsd flakhsd fkjas dfkjhasd kfljha skld faks ldfhlka
              hdslfkh
            </p>
            <img
              src="https://images.unsplash.com/photo-1621784563286-84f7646ef221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="user image"
              className="rounded-full w-8 h-8"
            />
          </div>
          <div className="flex flex-row justify-start items-center gap-3 w-full px-5 py-2.5">
            <img
              src="https://images.unsplash.com/photo-1621784563286-84f7646ef221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="user image"
              className="rounded-full w-8 h-8"
            />
            <p className="text-sm text-justify overflow-hidden font-normal px-3 py-2.5 max-w-[18rem] md:max-w-md lg:max-w-lg bg-gray-300/50 rounded-md">
              Hello there how you doing? ads faadsfasdf asdfasdfasd asdfasdfadf
              asdfasdfads asdkhflkajshdf aksdhf aksdhf asd kfhalksdjhf alksd
              falkjsdhf lakhsd flakhsd fkjas dfkjhasd kfljha skld faks ldfhlka
              hdslfkh
            </p>
          </div>
          <div className="flex flex-row justify-end items-center gap-3 w-full px-5 py-2.5">
            <p className="text-sm text-justify overflow-hidden font-normal px-3 py-2.5 max-w-[18rem] md:max-w-md lg:max-w-lg bg-gray-300/80 rounded-md">
              Hello there how you doing? ads faadsfasdf asdfasdfasd asdfasdfadf
              asdfasdfads asdkhflkajshdf aksdhf aksdhf asd kfhalksdjhf alksd
              falkjsdhf lakhsd flakhsd fkjas dfkjhasd kfljha skld faks ldfhlka
              hdslfkh
            </p>
            <img
              src="https://images.unsplash.com/photo-1621784563286-84f7646ef221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="user image"
              className="rounded-full w-8 h-8"
            />
          </div>
          <div className="flex flex-row justify-start items-center gap-3 w-full px-5 py-2.5">
            <img
              src="https://images.unsplash.com/photo-1621784563286-84f7646ef221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="user image"
              className="rounded-full w-8 h-8"
            />
            <p className="text-sm text-justify overflow-hidden font-normal px-3 py-2.5 max-w-[18rem] md:max-w-md lg:max-w-lg bg-gray-300/50 rounded-md">
              Hello there how you doing? ads faadsfasdf asdfasdfasd asdfasdfadf
              asdfasdfads asdkhflkajshdf aksdhf aksdhf asd kfhalksdjhf alksd
              falkjsdhf lakhsd flakhsd fkjas dfkjhasd kfljha skld faks ldfhlka
              hdslfkh
            </p>
          </div>
          <div className="flex flex-row justify-end items-center gap-3 w-full px-5 py-2.5">
            <p className="text-sm text-justify overflow-hidden font-normal px-3 py-2.5 max-w-[18rem] md:max-w-md lg:max-w-lg bg-gray-300/80 rounded-md">
              Hello there how you doing? ads faadsfasdf asdfasdfasd asdfasdfadf
              asdfasdfads asdkhflkajshdf aksdhf aksdhf asd kfhalksdjhf alksd
              falkjsdhf lakhsd flakhsd fkjas dfkjhasd kfljha skld faks ldfhlka
              hdslfkh
            </p>
            <img
              src="https://images.unsplash.com/photo-1621784563286-84f7646ef221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="user image"
              className="rounded-full w-8 h-8"
            />
          </div>
          <div className="flex flex-row justify-start items-center gap-3 w-full px-5 py-2.5">
            <img
              src="https://images.unsplash.com/photo-1621784563286-84f7646ef221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="user image"
              className="rounded-full w-8 h-8"
            />
            <p className="text-sm text-justify overflow-hidden font-normal px-3 py-2.5 max-w-[18rem] md:max-w-md lg:max-w-lg bg-gray-300/50 rounded-md">
              Hello there how you doing? ads faadsfasdf asdfasdfasd asdfasdfadf
              asdfasdfads asdkhflkajshdf aksdhf aksdhf asd kfhalksdjhf alksd
              falkjsdhf lakhsd flakhsd fkjas dfkjhasd kfljha skld faks ldfhlka
              hdslfkh
            </p>
          </div>
          <div className="flex flex-row justify-end items-center gap-3 w-full px-5 py-2.5">
            <p className="text-sm text-justify overflow-hidden font-normal px-3 py-2.5 max-w-[18rem] md:max-w-md lg:max-w-lg bg-gray-300/80 rounded-md">
              Hello there how you doing? ads faadsfasdf asdfasdfasd asdfasdfadf
              asdfasdfads asdkhflkajshdf aksdhf aksdhf asd kfhalksdjhf alksd
              falkjsdhf lakhsd flakhsd fkjas dfkjhasd kfljha skld faks ldfhlka
              hdslfkh
            </p>
            <img
              src="https://images.unsplash.com/photo-1621784563286-84f7646ef221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="user image"
              className="rounded-full w-8 h-8"
            />
          </div>
        </div>

        <form>
          <label className="sr-only">Your message</label>
          <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
            <button
              type="button"
              className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Upload image</span>
            </button>
            <button
              type="button"
              className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Add emoji</span>
            </button>
            <textarea
              id="chat"
              rows="1"
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
            <button
              type="submit"
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
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div> */}
    </>
  );
};

export default UserChat;
