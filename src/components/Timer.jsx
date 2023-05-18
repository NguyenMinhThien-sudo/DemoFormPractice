import React, { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [message, setMessage] = useState("Thiện");
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => clearInterval(timer);
  }, [message]);
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-3 bg-black text-white"
      />
    </div>
  );
};

export default Timer;
