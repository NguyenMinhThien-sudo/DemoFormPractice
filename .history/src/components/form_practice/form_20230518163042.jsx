import React, { useState } from "react";
import styled from "styled-components";

const AuthForm = styled.div`
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
  margin: 0;
  padding: 0;
  .main-form {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: silver;
    width: 100%;
    height: 100vh;
  }
  .form-wrapper {
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    overflow: hidden;
    max-width: 400px;
  }
  .title-text {
    width: 200%;
    display: flex;
  }
  .title {
    text-align: center;
    width: 50%;
    font-size: 35px;
    font-weight: bold;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .form-contain {
    width: 100%;
    overflow: hidden;
  }
  .slide-form {
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 50px;
    border: 1px solid black;
    border-radius: 15px;
    margin: 20px 0 20px;
    position: relative;
  }
  .slide {
    width: 100%;
    height: 100%;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1;
  }
  .slide-tab {
    height: 100%;
    width: 50%;
    border-radius: 15px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: blue;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 0;
  }
  .slide-form input[type="radio"] {
    display: none;
  }
  .form-slider {
    width: 200%;
    display: flex;
  }
  form {
    width: 50%;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  form input {
    height: 100%;
    width: 100%;
    padding-left: 15px;
    margin-right: 15px;
    border: 1px solid silver;
    border-radius: 15px;
  }
  .input {
    width: 100%;
    height: 50px;
    margin: 20px 0;
  }
  input[type="button"] {
    background-color: blue;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  a {
    outline: none;
    color: blue;
  }
  .regis {
    text-align: center;
  }
  .is-active {
    margin-left: -50%;
  }
  .is-slide {
    margin-left: 50%;
  }
`;

const Form = () => {
  const [selectForm, setSelectForm] = useState("");
  //   const [access, setAccess] = useState(true);
  //   const [access2, setAccess2] = useState(false);
  const handleClickForm = () => {
    if (selectForm === "") {
      setSelectForm("is-active");
    } else {
      setSelectForm("");
    }
    // setAccess(true);
    // setAccess2(false);
  };
  //   const handleClickForm2 = () => {
  //     setSelectForm("is-slide");
  //     setAccess(false);
  //     setAccess2(true);
  //   };
  return (
    <AuthForm>
      <div className="main-form">
        <div className="form-wrapper">
          <div className="title-text">
            <div
              className={`title login-text ${selectForm ? "is-active" : ""}`}
            >
              Đăng Nhập
            </div>
            <div className="title signup-text">Đăng Ký</div>
          </div>
          <div className="form-contain">
            <div className="slide-form">
              <input type="radio" name="slide-login" id="login" />
              <input type="radio" name="slide-signup" id="signup" />
              <label
                htmlFor="login"
                className={`slide login ${!selectForm ? "text-white" : ""}`}
                onClick={handleClickForm}
              >
                Đăng nhập
              </label>
              <label
                htmlFor="signup"
                className={`slide signup ${selectForm ? "text-white" : ""}`}
                onClick={handleClickForm}
              >
                Đăng ký
              </label>
              <div
                className={`slide-tab ${selectForm ? "is-slide" : ""}`}
              ></div>
            </div>
            <div className="form-slider">
              <form
                action="#"
                className={`form-login ${selectForm ? "is-active" : ""}`}
              >
                <div className="input">
                  <input
                    type="email"
                    name="email_login"
                    placeholder="Địa chỉ email"
                    required
                  />
                </div>
                <div className="input">
                  <input
                    type="password"
                    name="pass_login"
                    placeholder="Mật khẩu"
                    required
                  />
                </div>
                <div className="pass">
                  <a href="#">Quên mật khẩu?</a>
                </div>
                <div className="input btn">
                  <input type="button" name="btn_login" value="Đăng nhập" />
                </div>
                <div className="regis">
                  <p>
                    Chưa có tài khoản?{" "}
                    <a href="#" onClick={handleClickForm}>
                      Đăng ký ngay
                    </a>
                  </p>
                </div>
              </form>
              <form action="#" className="form-signup">
                <div className="input">
                  <input
                    type="email"
                    name="email_login"
                    placeholder="Địa chỉ email"
                    required
                  />
                </div>
                <div className="input">
                  <input
                    type="password"
                    name="pass_login"
                    placeholder="Mật khẩu"
                    required
                  />
                </div>
                <div className="input">
                  <input type="button" name="btn_login" value="Đăng ký" />
                </div>
                <div className="regis">
                  <p>
                    Đã có tài khoản?{" "}
                    <a href="#" onClick={handleClickForm}>
                      Đăng nhập ngay
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthForm>
  );
};

export default Form;
