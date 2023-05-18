import React from "react";
import styled from "styled-components";
import { YoutubeData } from "../YoutubeData";
import Chuong2 from "./Chuong2";

const YoutubeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  padding: 10px;
`;

const Chuong2List = () => {
  return (
    <div>
      <YoutubeList>
        {YoutubeData.map((item) => (
          <Chuong2
            key={item.id}
            title={item.title}
            author={item.author}
            view={item.view}
            time={item.time}
            image={item.image}
            avatar={item.avatar}
          ></Chuong2>
        ))}
      </YoutubeList>
    </div>
  );
};

export default Chuong2List;
