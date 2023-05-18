import React from "react";
import styled from "styled-components";

const authForm = styled.div`
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
  margin: 0;
  padding: 0;
`;

const Form = () => {
  return (
    <div>
      <authForm>
        <div className="main-form">
          <div className="form-wrapper">
            <div className="title-text">
              <div className="title login-text">Đăng Nhập</div>
              <div className="title signup-text">Đăng Ký</div>
            </div>
            <div className="form-contain">
              <div className="slide-form">
                <input type="radio" name="slide-login" id="login" checked />
                <input type="radio" name="slide-signup" id="signup" />
                <label htmlFor="login" className="slide login">
                  Đăng nhập
                </label>
                <label htmlFor="signup" className="slide signup">
                  Đăng ký
                </label>
                <div className="slide-tab"></div>
              </div>
              <div className="form-slider">
                <form action="#" className="form-login">
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
                      Chưa có tài khoản? <a href="#">Đăng ký ngay</a>
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
                      Đã có tài khoản? <a href="#">Đăng nhập ngay</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </authForm>
    </div>
  );
};

export default Form;
