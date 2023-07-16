import React from "react";
import "../Navbar/navbar.css";
import { NavLink } from "react-router-dom";
const Topnavbar = () => {
  return (
    <>
      <div className="container-fluid topNavbarContainer">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="topNavbarflex">
              <div className="phone">
                <i className="fas fa-truck"></i>
                <span className="phoneNo">Free Shipping over Rs.1000</span>
              </div>

              <div className="topheaderFaq">
                <div className="faqList">
                  <ul>
                    <li>
                      <NavLink to='/'>Shipping</NavLink>
                    </li>
                    <li>
                      <NavLink to='/'>FAQ</NavLink>
                    </li>
                    <li>
                      <NavLink to='/'>Contact</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="socialHeader">
                  <NavLink to='/'>
                   <i className="fa-brands fa-facebook"></i>
                  </NavLink>
                  <NavLink to='/'>
                  <i className="fa-brands fa-instagram"></i>
                  </NavLink>
                  <NavLink to='/'>
                  <i className="fa-brands fa-twitter"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnavbar;
