import React from "react";

const HackerNews2 = () => {
  const [hits, setHits] = useState([]);
  return (
    <div>
      {hits.length > 0 &&
        hits.map((item) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews2;
