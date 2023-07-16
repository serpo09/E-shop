import React from "react";
import { NavLink } from "react-router-dom";
import gallerypic1 from "../../images/pic1.jpg";
import gallerypic2 from "../../images/pic2.jpg";
import gallerypic3 from "../../images/pic3.jpg";
import gallerypic4 from "../../images/pic4.jpg";
import gallerypic5 from "../../images/pic5.jpg";
import gallerypic6 from "../../images/pic6.jpg";

const Socialgallery = () => {
  return (
    <>
      <div className="container-fluid marginTop">
        <div className="row">
          <div className="col-12 px-0">
            <div className="socialContainer">
              <div className="social-pic">
                <div className="galleryimg">
                  <img src={gallerypic1} alt="" />
                </div>
                <div className="galleryimg">
                  <img src={gallerypic2} alt="" />
                </div>
                <div className="galleryimg">
                  <img src={gallerypic3} alt="" />
                </div>
                <div className="galleryimg">
                  <img src={gallerypic4} alt="" />
                </div>
              </div>
              <div className="social-info">
                <div className="Icon">
                  <NavLink to="/">
                    <i className="fa-brands fa-instagram"></i>
                  </NavLink>
                </div>
                <h2>Instashop</h2>
                <p>
                  A conscious collection made entirely from food crop waste,
                  recycled cotton, other more sustainable materials.
                </p>
                <h6>
                  <NavLink to="/">Go To Instagram</NavLink>
                </h6>
              </div>
              <div className="social-pic">
                <div className="galleryimg">
                  <img src={gallerypic4} alt="" />
                </div>
                <div className="galleryimg">
                  <img src={gallerypic6} alt="" />
                </div>
                <div className="galleryimg">
                  <img src={gallerypic1} alt="" />
                </div>
                <div className="galleryimg">
                  <img src={gallerypic5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socialgallery;
