import React, { useState } from "react";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  return (
    <div>
      {hits.length > 0 &&
        hits.map((item) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
// https://hn.algolia.com/api/v1/search?query=react
