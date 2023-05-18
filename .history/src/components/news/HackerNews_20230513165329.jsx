import React, { useEffect, useState } from "react";
import axios from "axios";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const handleGetHackerNews = async () => {
    const response = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );
    setHits(response.data?.hits);
  };
  useEffect(() => {
    handleGetHackerNews();
  }, []);
  return (
    <div>
      {hits.map((item) => (
        <h3 key={item.title}>{item.title}</h3>
      ))}
    </div>
  );
};

export default HackerNews;
