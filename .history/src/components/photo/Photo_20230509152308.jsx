import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list?limit=8")
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
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
      {ramdomPhotos.map((item) => (
        <div key={item.id}>
          <img
            src={item.download_url}
            alt={item.author}
            className="p-3 bg-white shadow-md rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Photo;
