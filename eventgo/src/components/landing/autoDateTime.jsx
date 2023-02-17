import React, { useState, useEffect } from "react";

const AutoDateTime = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <div>{year}</div>;
};

export default AutoDateTime;
