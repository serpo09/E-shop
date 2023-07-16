import React from "react";
import "../Login/loginPage.css";
import { NavLink } from "react-router-dom";

const loginPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="loginContainer">
              <h3>Login</h3>
              <div className="formContainer">
                <form>
                  <h5>Email*</h5>
                  <input type="email" placeholder="Email"  required/>

                  <h5>Password</h5>
                  <input type="password" required/>

                  <div className="btnContainer">
                    <button className="submitBtn">Login</button>
                  </div>
                </form>
              </div>

              <div className="loginFoot">
                <div className="Register">
                  <h6><NavLink to="/register">Don't have account ?</NavLink></h6>
                </div>
                <div className="rememberMe">
                <h6><input type="checkbox" />Remember Me</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default loginPage;
