import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    firstname: "Nguyễn Minh",
    lastname: "Thiện",
  });
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  useEffect(() => {}, []);
  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="firstname"
        value={info.firstname}
        onChange={(e) =>
          setInfo({
            ...info,
            firstname: e.target.value,
          })
        }
      />
      <span className="text-2xl font-bold">{count}</span>
      <button className="inline-block p-3 bg-green-400 text-white rounded-lg">
        Increment
      </button>
    </div>
  );
};

export default Counter;
