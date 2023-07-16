import React from "react";
import "../Homescreen/css/rough.css";

import img1 from "../../images/pic1.jpg";
import { Link } from "react-router-dom";
import Selectoption from "../Selectoption/Selectoption";
import Viewproduct from "../Viewproductmodal/Viewproduct";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../Swiper/swiper.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Roughproduct = (props) => {
  const heading = props.heading;

  return (
    <>
    <div className="container-fluid roughMargintop">
      <div className="row">
        <div className="col-12">
          <h2>{heading}</h2>
        </div>
      </div>
    </div>
      <div className="container mt-3 mt-lg-4">
        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Navigation]}
              navigation
              breakpoints={{
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >

              <SwiperSlide>
                <div className="productcardContainer">
                  <div className="productimg">
                    <Link to="/productdetailscreen">
                      <img src={img1} alt="" />
                    </Link>
                    <div className="productleft">
                      <div className="percentage">- 71%</div>
                      <div className="new">New</div>
                      <div className="sale">Sale</div>
                    </div>

                    <div className="productright">
                      <div className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </div>

                      <div
                        className="view mt-3"
                        data-bs-toggle="modal"
                        data-bs-target="#viewmodal"
                        type="button"
                      >
                        <i className="fa-regular fa-eye"></i>
                      </div>
                    </div>

                    <div className="addcartbtn">
                      <button
                        className="addtocart"
                        data-bs-toggle="modal"
                        data-bs-target="#selectOption"
                      >
                        Select Option
                      </button>
                    </div>
                  </div>

                  <div className="productInfo">
                    <h4>
                      <Link to="/productdetailscreen">
                        White Tshirt Long sleeves
                      </Link>
                    </h4>
                    <h5>
                      Rs.<span className="oldmrp">1400</span>
                      <span className="newmrp">999</span>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              

              <SwiperSlide>
                <div className="productcardContainer">
                  <div className="productimg">
                    <Link to="/productdetailscreen">
                      <img src={img1} alt="" />
                    </Link>
                    <div className="productleft">
                      <div className="percentage">- 71%</div>
                      <div className="new">New</div>
                      <div className="sale">Sale</div>
                    </div>

                    <div className="productright">
                      <div className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </div>

                      <div
                        className="view mt-3"
                        data-bs-toggle="modal"
                        data-bs-target="#viewmodal"
                        type="button"
                      >
                        <i className="fa-regular fa-eye"></i>
                      </div>
                    </div>

                    <div className="addcartbtn">
                      <button
                        className="addtocart"
                        data-bs-toggle="modal"
                        data-bs-target="#selectOption"
                      >
                        Select Option
                      </button>
                    </div>
                  </div>

                  <div className="productInfo">
                    <h4>
                      <Link to="/productdetailscreen">
                        White Tshirt Long sleeves
                      </Link>
                    </h4>
                    <h5>
                      Rs.<span className="oldmrp">1400</span>
                      <span className="newmrp">999</span>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="productcardContainer">
                  <div className="productimg">
                    <Link to="/productdetailscreen">
                      <img src={img1} alt="" />
                    </Link>
                    <div className="productleft">
                      <div className="percentage">- 71%</div>
                      <div className="new">New</div>
                      <div className="sale">Sale</div>
                    </div>

                    <div className="productright">
                      <div className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </div>

                      <div
                        className="view mt-3"
                        data-bs-toggle="modal"
                        data-bs-target="#viewmodal"
                        type="button"
                      >
                        <i className="fa-regular fa-eye"></i>
                      </div>
                    </div>

                    <div className="addcartbtn">
                      <button
                        className="addtocart"
                        data-bs-toggle="modal"
                        data-bs-target="#selectOption"
                      >
                        Select Option
                      </button>
                    </div>
                  </div>

                  <div className="productInfo">
                    <h4>
                      <Link to="/productdetailscreen">
                        White Tshirt Long sleeves
                      </Link>
                    </h4>
                    <h5>
                      Rs.<span className="oldmrp">1400</span>
                      <span className="newmrp">999</span>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="productcardContainer">
                  <div className="productimg">
                    <Link to="/productdetailscreen">
                      <img src={img1} alt="" />
                    </Link>
                    <div className="productleft">
                      <div className="percentage">- 71%</div>
                      <div className="new">New</div>
                      <div className="sale">Sale</div>
                    </div>

                    <div className="productright">
                      <div className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </div>

                      <div
                        className="view mt-3"
                        data-bs-toggle="modal"
                        data-bs-target="#viewmodal"
                        type="button"
                      >
                        <i className="fa-regular fa-eye"></i>
                      </div>
                    </div>

                    <div className="addcartbtn">
                      <button
                        className="addtocart"
                        data-bs-toggle="modal"
                        data-bs-target="#selectOption"
                      >
                        Select Option
                      </button>
                    </div>
                  </div>

                  <div className="productInfo">
                    <h4>
                      <Link to="/productdetailscreen">
                        White Tshirt Long sleeves
                      </Link>
                    </h4>
                    <h5>
                      Rs.<span className="oldmrp">1400</span>
                      <span className="newmrp">999</span>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="productcardContainer">
                  <div className="productimg">
                    <Link to="/productdetailscreen">
                      <img src={img1} alt="" />
                    </Link>
                    <div className="productleft">
                      <div className="percentage">- 71%</div>
                      <div className="new">New</div>
                      <div className="sale">Sale</div>
                    </div>

                    <div className="productright">
                      <div className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </div>

                      <div
                        className="view mt-3"
                        data-bs-toggle="modal"
                        data-bs-target="#viewmodal"
                        type="button"
                      >
                        <i className="fa-regular fa-eye"></i>
                      </div>
                    </div>

                    <div className="addcartbtn">
                      <button
                        className="addtocart"
                        data-bs-toggle="modal"
                        data-bs-target="#selectOption"
                      >
                        Select Option
                      </button>
                    </div>
                  </div>

                  <div className="productInfo">
                    <h4>
                      <Link to="/productdetailscreen">
                        White Tshirt Long sleeves
                      </Link>
                    </h4>
                    <h5>
                      Rs.<span className="oldmrp">1400</span>
                      <span className="newmrp">999</span>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="productcardContainer">
                  <div className="productimg">
                    <Link to="/productdetailscreen">
                      <img src={img1} alt="" />
                    </Link>
                    <div className="productleft">
                      <div className="percentage">- 71%</div>
                      <div className="new">New</div>
                      <div className="sale">Sale</div>
                    </div>

                    <div className="productright">
                      <div className="wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </div>

                      <div
                        className="view mt-3"
                        data-bs-toggle="modal"
                        data-bs-target="#viewmodal"
                        type="button"
                      >
                        <i className="fa-regular fa-eye"></i>
                      </div>
                    </div>

                    <div className="addcartbtn">
                      <button
                        className="addtocart"
                        data-bs-toggle="modal"
                        data-bs-target="#selectOption"
                      >
                        Select Option
                      </button>
                    </div>
                  </div>

                  <div className="productInfo">
                    <h4>
                      <Link to="/productdetailscreen">
                        White Tshirt Long sleeves
                      </Link>
                    </h4>
                    <h5>
                      Rs.<span className="oldmrp">1400</span>
                      <span className="newmrp">999</span>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>

      <div className="modal fade" id="viewmodal">
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Viewproduct />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Two */}
      <div className="modal fade" id="selectOption">
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Selectoption />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roughproduct;
