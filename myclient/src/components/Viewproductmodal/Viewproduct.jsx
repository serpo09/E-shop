import React from "react";
import "../Viewproductmodal/viewproduct.css";

import picDetails from "../../images/pic1.jpg";
import showpic1 from "../../images/pic2.jpg"
// import showpic2 from "../../images/pic3.jpg"

const Viewproduct = () => {
  return (
    <>
      <div className="container-fluid viewproductContainer">
        <div className="row">
          <div className="col-6">
            <div className="imgContainer">
              <div className="viewimg bigImg">
                <img src={showpic1} alt="" />
              </div>
              {/* <div className="viewimg demoImg">
                <img src="" alt="Demo Image" />
              </div> */}
            </div>
          </div>
          <div className="col-6  viewproductInfo">
            <h3>Fit Jacket with Denim Panels</h3>
            <h4>
              Rs.<span className="oldprice">3999</span>{" "}
              <span className="newprice">2999</span>
            </h4>

            <p className="details">
              Captivate with this shirt’s versatile urban look that works as
              well at happy hour as it does in the back yard. The real mother of
              pearl buttons and embroidered crocodile...
            </p>

            <div className="productColor">
              <h5>COLOR: BLUE</h5>
              <div className="colorImg">
                <img src={picDetails} alt="" className="active" />
                <img src={picDetails} alt="" />
                <img src={picDetails} alt="" />
              </div>
            </div>

            <div className="productSize">
              <h5>SIZE: MD</h5>
              <div className="imgSize">
                <span className="size sm">sm</span>
                <span className="size md active">md</span>
                <span className="size lg">lg</span>
                <span className="size xlg">xl</span>
              </div>
            </div>

            <div className="wishList">
                  <h5>
                    <span className="wishIcon">
                      <i className="fa-regular fa-heart"></i>
                    </span>
                    <span className="wishText">add to wishlist</span>
                  </h5>
            </div>

            <div className="quantityBtnContainer">
              <h5>QUANTITY:</h5>
              <div className="flexBtns">
                <div className="quantitybtns">
                  <button className="decrease">-</button>
                  <input type="text" className="qtys" readOnly />
                  <button className="increase">+</button>
                </div>
                <div className="addCart">
                  <button className="cartBtn">
                    <span className="cartTextbtn"> ADD TO CART </span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className="buyBtncontainer">
                <button className="buyBtn">Buy It now</button>
              </div>
            </div> 
            
            </div>

        </div>
      </div>
    </>
  );
};

export default Viewproduct;
