import React, { useEffect } from "react";
import axios from "axios";

const GetPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

const Photo = () => {
  useEffect(() => {
    document.title = "Welcome to useEffect";
    console.log("inside");
  }, []);
  console.log("outside");
  return <div>Photos</div>;
};

export default Photo;
