import React from "react";
import "../Selectoption/selectoption.css";
import pic1 from '../../images/pic1.jpg'
import pic2 from '../../images/pic2.jpg'
import pic3 from '../../images/pic3.jpg'
import pic4 from '../../images/pic4.jpg'

const Selectoption = () => {

  

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="selectoptionContainer">
              <div className="selectOptionColor">
                <h5>Color: <span className="colorName">Darkolivegreen</span></h5>

                <div className="selectImgContainer">
                  <div className="selectImg one">
                    <img src={pic1} alt="" />
                  </div>
                  <div className="selectImg two active">
                  <img src={pic2} alt="" />
                  </div>
                  <div className="selectImg three">
                  <img src={pic3} alt="" />
                  </div>
                  <div className="selectImg four">
                  <img src={pic4} alt="" />
                  </div>
                </div>
              </div>
              <div className="selectOptionSize">
                <h5>Size:M</h5>
                  <div className="itemSize">
                    <span className="size sm">sm</span>
                    <span className="size md active">md</span>
                    <span className="size lg">lg</span>
                    <span className="size xlg">xl</span>
                  </div>
              </div>
              <div className="selectOptionPrice">
              <h4>
                  Rs.<span className="oldmrp">1400</span>
                  <span className="newmrp">999</span>
                </h4>
              </div>
              
              {/* Add Cart */}
              <div className="selectOptionAddBag">
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
              <div className="selectOptionBuy"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selectoption;
