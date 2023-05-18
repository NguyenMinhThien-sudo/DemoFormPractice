import React, { useState } from "react";
import axios from "axios";

const HackerNews2 = () => {
  const [hits, setHits] = useState([]);
  const handleFetchData = async () => {
    const response = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );
    setHits(response.data);
  };
  return (
    <div>
      {hits.length > 0 &&
        hits.map((item) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews2;
