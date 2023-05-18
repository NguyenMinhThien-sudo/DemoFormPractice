import React, { useEffect } from "react";

const Photo = () => {
  useEffect(() => {
    document.title = "Welcome to useEffect";
    console.log("inside");
  }, []);
  console.log("outside");
  return <div>Photos</div>;
};

export default Photo;
