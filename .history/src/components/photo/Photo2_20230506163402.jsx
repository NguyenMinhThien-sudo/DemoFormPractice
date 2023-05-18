import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
const Photo2 = () => {
  const [randomPhotos, setRandomPhotos] = useState();
  useEffect(() => {
    getRandomPhotos().then((images) => {
      console.log(images);
    });
  });
  return <div></div>;
};

export default Photo2;
