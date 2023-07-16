import React from "react";
import "../Register/register.css";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="registerContainer">
              <h3>Registration</h3>
              <div className="formContainer">
                <form>
                  <div className="nameContainer">
                    <div className="fName">
                      <h5>First Name</h5>
                      <input type="text"required />
                    </div>
                    <div className="lName">
                      <h5>Last Name</h5>
                      <input type="text" required/>
                    </div>
                  </div>

                 <div className="contactContainer">
                    <div className="Email">
                      <h5>Email*</h5>
                      <input type="email" required/>
                    </div>
                    <div className="number">
                      <h5>Contact No.</h5>
                      <input type="text" required/>
                    </div>
                  </div>

                  <div className="passContainer">
                    <div className="Password">
                      <h5>Password*</h5>
                      <input type="password" required/>
                    </div>
                    <div className="cpassword">
                    <h5>Confirm Password*</h5>
                      <input type="password" required/>
                    </div>
                  </div>

                  <div className="btnContainer">
                    <button className="submitBtn">Register</button>
                  </div>
                </form>
              </div>

              <div className="registerFoot">
                <div className="Register">
                  <h6>
                    <NavLink to="/login">Already have account ?</NavLink>
                  </h6>
                </div>
                <div className="rememberMe">
                  <h6>
                    <input type="checkbox" />
                    Remember Me
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
