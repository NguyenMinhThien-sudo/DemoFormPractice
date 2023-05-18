import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  return (
    <div className="p-5 flex gap-x-4 items-center">
      <span className="text-2xl font-bold">{count}</span>
      <button className="inline-block p-3 bg-green-400 text-white rounded-lg">
        Increment
      </button>
    </div>
  );
};

export default Counter;
