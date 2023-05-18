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
  const [ramdomPhotos, setRandomPhotos] = useState([]);
  useEffect(() => {
    getRandomPhotos().then((data) => {
      console.log(data);
      setRandomPhotos(data);
    });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {ramdomPhotos.map((item) => {
        return (
          <div key={item.id} className="p-3 bg-white shadow-md rounded-lg">
            <img src="item.url" alt="item.author" />
          </div>
        );
      })}
    </div>
  );
};

export default Photo;
