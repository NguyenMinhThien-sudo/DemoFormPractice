import axios from "axios";
import React, { useEffect, useState } from "react";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const handleGetHackerNews = async () => {
    const response = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );
    console.log(response.data);
    setHits(response.data?.hits);
  };
  useEffect(() => {
    handleGetHackerNews();
  }, []);
  return (
    <div>
      {hits.length > 0 &&
        hits.map((item) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
