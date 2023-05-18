import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const Photo = () => {
  const [ramdomPhotos, setRandomPhotos] = useState();
  useEffect(() => {
    getRandomPhotos().then((data) => {
      console.log(data);
    });
  }, []);
  return <div>Photos</div>;
};

export default Photo;
