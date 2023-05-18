import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then(function (response) {
      // console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const Photo = () => {
  const [nextPage, setNextPage] = useState(1);
  const [ramdomPhotos, setRandomPhotos] = useState([]);
  const handleLoadMorePhotos = () => {
    getRandomPhotos(nextPage).then((data) => {
      const newPhotos = [...ramdomPhotos, ...data];
      setRandomPhotos(newPhotos);
      setNextPage(nextPage + 1);
    });
  };
  useEffect(() => {
    handleLoadMorePhotos();
  }, []);
  return (
    <div>
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
      <div className="text-center">
        <button
          onClick={handleLoadMorePhotos}
          className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg"
        >
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default Photo;
