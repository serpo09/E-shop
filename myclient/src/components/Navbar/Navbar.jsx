import React from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  // const [scroll,setScroll] = useState(0);

  // useEffect(() => {
  //   document.addEventListener('scroll' , () => {
  //     const scrollValue = document.documentElement.scrollTop;

  //     if (scrollValue > 168 ) {
  //       const navbar = document.querySelector('.navbarContainer');
  //       const logo = document.querySelector('.logoimg');
  //       navbar.classList.add('show');
  //       logo.classList.add('reloadlogo');
  //     } else {
  //       const navbar = document.querySelector('.navbarContainer');
  //       const logo = document.querySelector('.logoimg');
  //       navbar.classList.remove('show');
  //       logo.classList.remove('reloadlogo');
  //     }
  //   })
  // })

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbarContainer navbarPadding">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">
            <img src={logo} alt="" className="logoimg" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <i className="fa-solid fa-bars-staggered"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/collection"
                  // id="navbarDropdown"
                  // role="button"
                  // data-bs-toggle="dropdown"
                  // aria-expanded="false"
                >
                  Collections
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* Right container */}

            <div className="rightContainer">
              <div className="user">
                <i className="fa-solid fa-user"></i>

                <div className="userDropdown">
                  <div className="userdropdownItem">
                    <NavLink to="/login">
                      <div className="dropdownitemFlex">
                        <div className="userdropdownIcon">
                          <i className="fa-solid fa-gear"></i>
                        </div>
                        <div className="userdropdownName">Login</div>
                      </div>
                    </NavLink>
                  </div>

                  <div className="userdropdownItem">
                    <NavLink to="/register">
                      <div className="dropdownitemFlex">
                        <div className="userdropdownIcon">
                          <i className="fa-solid fa-right-to-bracket"></i>
                        </div>
                        <div className="userdropdownName">Register</div>
                      </div>
                    </NavLink>
                  </div>
                  <div className="userdropdownItem">
                    <NavLink to="/checkout">
                      <div className="dropdownitemFlex">
                        <div className="userdropdownIcon">
                          <i className="fa-solid fa-circle-check"></i>
                        </div>
                        <div className="userdropdownName">Checkout</div>
                      </div>
                    </NavLink>
                  </div>
                  <div className="userdropdownItem">
                    <NavLink to="/wishlist">
                      <div className="dropdownitemFlex">
                        <div className="userdropdownIcon">
                          <i className="fa-solid fa-heart"></i>
                        </div>
                        <div className="userdropdownName">My Wishlist</div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div
                className="search"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <NavLink to="/">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </NavLink>
              </div>
              <div
                className="addCart"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
              >
                {/* <NavLink to="/cart"> */}
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="shoppingNo">0</span>
                {/* </NavLink> */}
              </div>

              {/* Modal for search */}
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Search All the Product
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h4> Products is gonna be here ! </h4>
                    </div>
                    {/* <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Understood
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body text-center">
          <h2>Your cart is empty</h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
