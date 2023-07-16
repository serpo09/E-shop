import React from "react";
import { NavLink } from "react-router-dom";
import Product1 from "../../images/product1.jpg";

const Featuredproducts = () => {
  return (
    <>
      <div className="container-fluid productMargin">
        <div className="row">
          <div className="col-12">
            <div className="productsContainer">
              <h2>Featured Products</h2>

              <div className="productItemContainer">
                <div className="productItem">
                  <NavLink to="/productDetail">
                    <div className="productImg">
                      <img src={Product1} alt="" />

                      <span className="ratings">
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <span className="text">4.9</span>
                      </span>
                    </div>

                    <div className="productInfo">
                      <h5>First Product</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>

                    <div className="productPrice">
                      <h4>
                        Rs. <span className="oldPrice">1599</span>
                        <span className="newPrice">1199</span>
                      </h4>
                    </div>

                    <div className="productIcons">
                      <div className="wishlist">
                        <NavLink to="/wishlist">
                          <i className="fa-regular fa-heart"></i>
                        </NavLink>
                      </div>

                      <div className="cart">
                        <NavLink to="/cart">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                      </div>

                      <div className="view">
                        <NavLink to="/view">
                          <i className="fa-regular fa-eye"></i>
                        </NavLink>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div className="productItem">
                  <NavLink to="/productDetail">
                    <div className="productImg">
                      <img src={Product1} alt="" />

                      <span className="ratings">
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <span className="text">4.9</span>
                      </span>
                    </div>

                    <div className="productInfo">
                      <h5>First Product</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>

                    <div className="productPrice">
                      <h4>
                        Rs. <span className="oldPrice">1599</span>
                        <span className="newPrice">1199</span>
                      </h4>
                    </div>

                    <div className="productIcons">
                      <div className="wishlist">
                        <NavLink to="/wishlist">
                          <i className="fa-regular fa-heart"></i>
                        </NavLink>
                      </div>

                      <div className="cart">
                        <NavLink to="/cart">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                      </div>

                      <div className="view">
                        <NavLink to="/view">
                          <i className="fa-regular fa-eye"></i>
                        </NavLink>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div className="productItem">
                  <NavLink to="/productDetail">
                    <div className="productImg">
                      <img src={Product1} alt="" />

                      <span className="ratings">
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <span className="text">4.9</span>
                      </span>
                    </div>

                    <div className="productInfo">
                      <h5>First Product</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>

                    <div className="productPrice">
                      <h4>
                        Rs. <span className="oldPrice">1599</span>
                        <span className="newPrice">1199</span>
                      </h4>
                    </div>

                    <div className="productIcons">
                      <div className="wishlist">
                        <NavLink to="/wishlist">
                          <i className="fa-regular fa-heart"></i>
                        </NavLink>
                      </div>

                      <div className="cart">
                        <NavLink to="/cart">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                      </div>

                      <div className="view">
                        <NavLink to="/view">
                          <i className="fa-regular fa-eye"></i>
                        </NavLink>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div className="productItem">
                  <NavLink to="/productDetail">
                    <div className="productImg">
                      <img src={Product1} alt="" />

                      <span className="ratings">
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <span className="text">4.9</span>
                      </span>
                    </div>

                    <div className="productInfo">
                      <h5>First Product</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>

                    <div className="productPrice">
                      <h4>
                        Rs. <span className="oldPrice">1599</span>
                        <span className="newPrice">1199</span>
                      </h4>
                    </div>

                    <div className="productIcons">
                      <div className="wishlist">
                        <NavLink to="/wishlist">
                          <i className="fa-regular fa-heart"></i>
                        </NavLink>
                      </div>

                      <div className="cart">
                        <NavLink to="/cart">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                      </div>

                      <div className="view">
                        <NavLink to="/view">
                          <i className="fa-regular fa-eye"></i>
                        </NavLink>
                      </div>
                    </div>
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

export default Featuredproducts;
