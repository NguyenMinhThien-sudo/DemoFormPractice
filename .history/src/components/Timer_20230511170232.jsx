import React, { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [message, setMessage] = useState("Thiện");
  useEffect(() => {
    console.log(message);
  }, 2000);
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default Timer;
