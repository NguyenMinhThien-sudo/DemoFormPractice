import React from "react";
import styled from "styled-components";

const StyledYoutube = styled.div`
  font-weight: lighter;
  .youtube-image {
    width: 400px;
    height: 250px;
    border-radius: 20px;
    .img {
      width: auto;
      height: auto;
      object-fit: cover;
    }
  }
  .youtube-content {
    display: flex;
    flex-direction: row;
    padding-top: 10px;
  }
  .youtube-avatar {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
  .youtube-header {
    margin-left: 10px;
  }
  .youtube-footer {
    display: flex;
    flex-direction: row;
  }
  .youtube-time {
    color: black;
  }
  .doc {
    background-color: black;
    width: 3px;
    height: 3px;
    border-radius: 100%;
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const Chuong2 = (props) => {
  return (
    <StyledYoutube>
      <div className="Youtube-image">
        <img
          className="youtube-image img"
          src={
            props.image ||
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          alt=""
        />
      </div>
      <div className="youtube-content">
        <div className="youtube-avatar">
          <img
            className="youtube-avatar img"
            src={
              props.avatar ||
              "https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            alt=""
          />
        </div>
        <div className="youtube-header">
          <h3 className="youtube-title">ViteJS Benefits</h3>
          <h4 className="youtube-author">Nguyễn Minh Thiện</h4>
          <div className="youtube-footer">
            <h4 className="youtube-view">104N lượt xem</h4>
            <div className="doc"></div>
            <h4 className="youtube-time">4 năm trước</h4>
          </div>
        </div>
      </div>
    </StyledYoutube>
  );
};

export default Chuong2;
