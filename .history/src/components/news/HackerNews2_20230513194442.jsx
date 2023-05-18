import React, { useState } from "react";
import axios from "axios";

const HackerNews2 = () => {
  const [hits, setHits] = useState([]);
  const handleFetchData = async () => {
    const response = await axios;
  };
  return (
    <div>
      {hits.length > 0 &&
        hits.map((item) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews2;
