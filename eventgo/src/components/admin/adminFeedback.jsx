import React, { useState, useEffect } from "react";
import axios from "./../../axios";

const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState("");

  useEffect(() => {
    axios
      .get("/feedback/all")
      .then((response) => {
        setFeedbacks(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  return (
    <>
      {/* {feedbacks.map((feedback) => { */}
      <div
        // key={feedback._id}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-4 py-8"
      >
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Product Image"
            className="h-48 object-cover object-center rounded-t-lg"
          />
          <div className="p-6">
            <h2 className="text-lg font-bold mb-2">Title</h2>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              scelerisque diam vel mauris viverra rhoncus. Sed in bibendum elit.
              Ut dignissim lectus quis velit bibendum, eget vulputate odio
              bibendum. Fusce sit amet urna nibh. Aliquam sagittis est quis enim
              pulvinar lacinia.
              {/* {feedback.description} */}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">John Doe</span>
              <span className="text-gray-500 text-sm">Artist</span>
              <span className="text-gray-500 text-sm">Jan 11 2023</span>
            </div>
          </div>
        </div>
      </div>
      {/* })} */}
    </>
  );
};

export default AdminFeedback;
