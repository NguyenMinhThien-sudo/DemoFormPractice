import React, { useEffect } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const Photo = () => {
  useEffect(() => {}, []);
  return <div></div>;
};

export default Photo;
