import React, { useEffect } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const Photo = () => {
  useEffect(() => {
    getRandomPhotos();
  }, []);
  return <div>Photos</div>;
};

export default Photo;
