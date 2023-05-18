import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [erorrMessage, setErrorMessage] = useState("");
  const handleGetHackerNews = useRef({});
  handleGetHackerNews.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error is ${error}`);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleGetHackerNews.current();
    });
  }, [query]);
  return (
    <div>
      <input
        type="text"
        className="border border-green-500 text-black p-5 mb-5 ml-5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!loading && erorrMessage && <p className="ml-5">{erorrMessage}</p>}
      {!loading &&
        hits.length > 0 &&
        hits.map((item) => (
          <h3 className="ml-5" key={item.title}>
            {item.title}
          </h3>
        ))}
    </div>
  );
};

export default HackerNews;
// https://hn.algolia.com/api/v1/search?query=react
