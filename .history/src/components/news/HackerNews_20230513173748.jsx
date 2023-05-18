import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const handleGetHackerNews = useRef({});
  handleGetHackerNews.current = async () => {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query}`
    );
    setHits(response.data?.hits || []);
  };
  useEffect(() => {
    handleGetHackerNews.current();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        className="border border-green-500 text-black p-5 mb-5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {hits.length > 0 &&
        hits.map((item) => (
          <h3 className="pr-2" key={item.title}>
            {item.title}
          </h3>
        ))}
    </div>
  );
};

export default HackerNews;
// https://hn.algolia.com/api/v1/search?query=react
