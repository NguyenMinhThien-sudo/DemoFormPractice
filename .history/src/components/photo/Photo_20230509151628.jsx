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

const Photo = () => {
  const [ramdomPhotos, setRandomPhotos] = useState();
  useEffect(() => {
    getRandomPhotos().then((data) => {
      console.log(data);
      setRandomPhotos(data);
    });
  }, []);
  return <div>{ramdomPhotos}</div>;
};

export default Photo;
