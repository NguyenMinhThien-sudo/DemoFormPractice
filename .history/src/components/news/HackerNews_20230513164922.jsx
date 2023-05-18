import React, { useEffect, useState } from "react";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const handleGetHackerNews = async () => {};
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
