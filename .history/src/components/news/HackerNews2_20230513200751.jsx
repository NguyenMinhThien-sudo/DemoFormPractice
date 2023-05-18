import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";

const HackerNews2 = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrMessage(`The error is ${error}`);
    }
  };
  const handleDebounce = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 1000);
  useEffect(() => {
    handleFetchData.current();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        className="border border-green-500 text-black p-5 mb-5 ml-5"
        defaultValue={query}
        onChange={handleDebounce}
      />
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin ml-5"></div>
      )}
      {!loading && errMessage && <p className="ml-5">{errMessage}</p>}
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

export default HackerNews2;
