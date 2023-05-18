import React, { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [message, setMessage] = useState("Thiện");
  useEffect(() => {
    console.log(message);
  });
  return <div></div>;
};

export default Timer;
