import { useState } from "react";
import "../ProductDetail/productdetails.css";
import picDetails from "../../images/product2.jpg";
import checkout from "../../images/payment_700x.avif";
import { NavLink } from "react-router-dom";

const Productdetails = () => {
  // Counting
  const [addCart, setAddcart] = useState(0);

  // const [cartItems, setCartItems] = useState([]);
  

  const increment = () => {
    setAddcart((c) => c + 1);
  };

  const decrement = () => {
    // addCart ==0 ? setAddcart((c) => c-1) : "";

    if (addCart === 0) {
      // console.log('Value cant be negative');
    } else {
      setAddcart((c) => c - 1);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="productDetailsContainer">
              <div className="productDetailsImg">
                <div className="productImg">
                  <img src={picDetails} alt="Products" />
                </div>
                <div className="productsampleImg">
                  <div className="samplesmallImg">
                    <img src={picDetails} alt="" className="activeImg" />
                  </div>
                  <div className="samplesmallImg">
                    <img src={picDetails} alt="" />
                  </div>
                  <div className="samplesmallImg">
                    <img src={picDetails} alt="" />
                  </div>
                  <div className="samplesmallImg">
                    <img src={picDetails} alt="" />
                  </div>
                </div>
              </div>
              <div className="productDetailsInfo">
                
                <div className="productInfoOne">
                  <h3>Fit Jacket with Denim Panels</h3>
                  <h4>
                    Rs.<span className="oldprice">3999</span>
                    <span className="newprice">2999</span>
                    <span className="reviews">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <span className="reviewText">No Reviews</span>
                    </span>
                  </h4>

                  <p className="details">
                    Captivate with this shirt’s versatile urban look that works
                    as well at happy hour as it does in the back yard. The real
                    mother of pearl buttons and embroidered crocodile...
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

                  <div className="customerNotes">
                    <h5>NOTES:</h5>
                    <textarea
                      name="notes"
                      id="review"
                      cols="30"
                      rows="10"
                      placeholder="Write here notes for the order"
                    ></textarea>
                  </div>

                  <div className="quantityBtnContainer">
                    <h5>QUANTITY:</h5>
                    <div className="flexBtns">
                      <div className="quantitybtns">
                        <button className="decrease" onClick={decrement}>
                          -
                        </button>
                        <input
                          type="text"
                          className="qtys"
                          readOnly
                          placeholder={addCart}
                        />
                        <button className="increase" onClick={increment}>
                          +
                        </button>
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

                  <div className="checkoutOption">
                    <h5>Guaranteed Safe checkout:</h5>

                    <div className="checkImg">
                      <img src={checkout} alt="" />
                    </div>
                  </div>
                </div>
                <div className="productInfoTwo">
                  <div className="wishList">
                    <h5>
                      <span className="wishIcon">
                        <i className="fa-regular fa-heart"></i>
                      </span>
                      <span className="wishText">add to wishlist</span>
                    </h5>
                  </div>
               
                  <div className="shareItem">
                    <h5>
                      <span className="shareIcon">
                        <i className="fa-solid fa-share-nodes"></i>
                      </span>
                      <span className="shareText">Share:</span>
                      <span className="socialIcon">
                        <NavLink to="/">
                          <i className="fa-brands fa-facebook"></i>
                        </NavLink>
                        <NavLink to="/">
                          <i className="fa-brands fa-instagram"></i>
                        </NavLink>
                        <NavLink to="/">
                          <i className="fa-brands fa-twitter"></i>
                        </NavLink>
                      </span>
                    </h5>
                    <h5>
                      <span className="shareIcon">
                        <i className="fa-solid fa-clock"></i>
                      </span>
                      <span className="shareText">
                        Orders ship within 5 to 10 business days.
                      </span>
                    </h5>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productdetails;
