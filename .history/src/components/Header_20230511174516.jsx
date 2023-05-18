import React, { useEffect } from "react";

const Header = () => {
  const handleScrollFixed = () => {
    const header = document.getElementById("header");
    if (window.scrollY > 1000) {
      header.classList.add("fixed");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollFixed);
    return () => {
      window.removeEventListener("scroll", handleScrollFixed);
    };
  }, []);
  return <div className="p-5 bg-black w-full" id="header"></div>;
};

export default Header;
