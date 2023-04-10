import React, { useState, useEffect } from "react";
import axios from "./../../axios";

const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get("/feedback")
      .then((response) => {
        setFeedbacks(response.data.feedbacks);
        console.log(response.data.feedbacks);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const dateOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  return (
    <>
      {feedbacks.length === 0 ? (
        <p className="text-center text-gray-500 py-4">No feedbacks found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-4 py-8">
          {feedbacks.map((feedback) => (
            <div key={feedback._id} className="bg-white rounded-lg shadow-md">
              <img
                src={feedback.image}
                alt="Product Image"
                className="h-48 object-cover object-center rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-lg font-bold mb-2">{feedback.title}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  {feedback.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    {feedback.userId.name}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {feedback.userId.role}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {new Date(feedback.createdAt).toLocaleDateString(
                      "en-US",
                      dateOptions
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AdminFeedback;
