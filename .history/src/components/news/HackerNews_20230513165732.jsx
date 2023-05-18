import React, { useState } from "react";
import axios from "axios";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const handleGetHackerNews = async () => {
    const response = await axios.get;
  };
  return (
    <div>
      {hits.length > 0 &&
        hits.map((item) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
// https://hn.algolia.com/api/v1/search?query=react
