import React, { useEffect } from "react";

const Header = () => {
  const handleScrollFixed = () => {
    console.log("fixed");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollFixed);
    return () => {
      window.removeEventListener("scroll", handleScrollFixed);
    };
  });
  return <div className="p-5 bg-black w-full"></div>;
};

export default Header;
