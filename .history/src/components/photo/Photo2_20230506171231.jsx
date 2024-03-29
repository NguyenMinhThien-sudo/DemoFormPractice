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
const Photo2 = () => {
  const [randomPhotos, setRandomPhotos] = useState();
  useEffect(() => {
    getRandomPhotos().then((images) => {
      console.log(images);
      setRandomPhotos(images);
    });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {randomPhotos?.map((item) => (
        <div key={item.id} className="p-3 bg-white shadow-md rounded-lg">
          <img
            src={item.download_url}
            alt={item.author}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Photo2;
