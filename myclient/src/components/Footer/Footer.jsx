import React from "react";
import {NavLink} from "react-router-dom";
import "../Footer/footer.css"

import payment from '../../images/payment_700x.avif'
const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-5 footerContainer">
        <div className="row">
          <div className="col-12">
            <footer
              className="text-center text-lg-start text-white"
            >
              <section className="d-flex justify-content-between p-4">
                <div className="me-5">
                  <span>Get connected with us on social networks:</span>
                </div>

                <div>
                  <NavLink to="/" className="text-white me-4">
                    <i className="fab fa-facebook-f"></i>
                  </NavLink>
                  <NavLink to="/" className="text-white me-4">
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                  <NavLink to="/" className="text-white me-4">
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                  <NavLink to="/" className="text-white me-4">
                    <i className="fab fa-linkedin"></i>
                  </NavLink>
                </div>
              </section>
              <hr />

              <section>
                <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold">E-SHOP</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                      <p>
                        Here you can use rows and columns to organize your
                        footer content. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                      </p>
                      <div className="footerimg">
                        <img src={payment} alt="" />
                      </div>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold">Products</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                      <p>
                        <NavLink to="/" className="text-white">
                        Denim shirts
                        </NavLink>
                      </p>
                      <p>
                        <NavLink to="/" className="text-white">
                          Denim Pants
                        </NavLink>
                      </p>
                      <p>
                        <NavLink to="/" className="text-white">
                          Denim Shorts
                        </NavLink>
                      </p>
                      <p>
                        <NavLink to="/" className="text-white">
                          Oversized T-Shirts
                        </NavLink>
                      </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold">Useful links</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                      <p>
                        <NavLink to="/" className="text-white">
                          Your Account
                        </NavLink>
                      </p>
                      <p>
                        <NavLink to="/" className="text-white">
                          Become an Affiliate
                        </NavLink>
                      </p>
                      <p>
                        <NavLink to="/" className="text-white">
                          Shipping Rates
                        </NavLink>
                      </p>
                      <p>
                        <NavLink to="/" className="text-white">
                          Help
                        </NavLink>
                      </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      <h6 className="text-uppercase fw-bold">Contact</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                      <p>
                        <i className="fas fa-home mr-3"></i>New Delhi, India
                      </p>
                      <p>
                        <i className="fas fa-envelope mr-3"></i> info@example.com
                      </p>
                      <p>
                        <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                      </p>
                      <p>
                        <i className="fas fa-print mr-3"></i> + 01 234 567 89
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="text-center p-3">
                © 2023 Copyright:
                <NavLink className="text-white" to="/">
                  E-Shop
                </NavLink>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
