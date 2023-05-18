import React, { useEffect } from "react";

const Header = () => {
  const handleScrollFixed = () => {
    const header = document.getElementById("header");
    if (window.scrollY > 200) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
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
