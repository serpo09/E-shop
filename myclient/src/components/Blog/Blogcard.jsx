import React from "react";
import "../Blog/blogcard.css";
import blogimg1 from "../../images/pic1.jpg";
import { Link } from "react-router-dom";

const Blogcard = () => {
  return (
    <>
      <div className="container-lg mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="cardParents">
              <div className="cardContainer">
                <div className="imgCont">
                  <Link>
                    <img src={blogimg1} alt="" />
                  </Link>
                </div>
                <div className="imginfo">
                  <h4><Link className="blogImgHead">Product one Info</Link></h4>
                  <h5>June 13, 2023</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    consectetur, excepturi voluptate ipsam commodi velit.
                  </p>
                  <button className="Btn">Read More</button>
                </div>
              </div>

              <div className="cardContainer">
              <div className="imgCont">
                  <Link>
                    <img src={blogimg1} alt="" />
                  </Link>
                </div>
                <div className="imginfo">
                  <h4><Link className="blogImgHead">Product one Info</Link></h4>
                  <h5>June 13, 2023</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    consectetur, excepturi voluptate ipsam commodi velit.
                  </p>
                  <button className="Btn">Read More</button>
                </div>
              </div>

              <div className="cardContainer">
              <div className="imgCont">
                  <Link>
                    <img src={blogimg1} alt="" />
                  </Link>
                </div>
                <div className="imginfo">
                  <h4><Link className="blogImgHead">Product one Info</Link></h4>
                  <h5>June 13, 2023</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    consectetur, excepturi voluptate ipsam commodi velit.
                  </p>
                  <button className="Btn">Read More</button>
                </div>
              </div>

              <div className="cardContainer">
              <div className="imgCont">
                  <Link>
                    <img src={blogimg1} alt="" />
                  </Link>
                </div>
                <div className="imginfo">
                  <h4><Link className="blogImgHead">Product one Info</Link></h4>
                  <h5>June 13, 2023</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    consectetur, excepturi voluptate ipsam commodi velit.
                  </p>
                  <button className="Btn">Read More</button>
                </div>
              </div>
            </div>
            <hr className="mt-5" />

            <div className="blogflex">
              <div className="pagination">
                <ul>
                  <li>
                    <Link className="pagiChild">1</Link>
                  </li>
                  <li>
                    <Link className="pagiChild">2</Link>
                  </li>
                  <li>
                    <Link className="pagiChild">3</Link>
                  </li>
                  <li>
                    <Link className="pagiChild">
                      {" "}
                      <i className="fas fa-chevron-right"></i>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pagiWord">
                <p>Showing 1-6 of 16 Results</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 mt-5 mt-lg-0">
            <div className="rightSideBlog">
              <div className="inputCont">
                <input
                  type="text"
                  className="blogsearch form-control"
                  placeholder="Search our Blogs"
                />
                <i className="fas fa-search icon"></i>
              </div>

              <div className="recentBlogsCont">
                <h3>Recent Articles</h3>
                <div className="blogs">
                  <h4>
                    <Link className="minorHead">
                      {" "}
                      Lorem ipsum dolor sit amet.{" "}
                    </Link>
                  </h4>
                  <h5 className="date">May 14,2023</h5>
                  <hr />
                </div>
                <div className="blogs">
                  <h4>
                    <Link className="minorHead">
                      {" "}
                      Lorem ipsum dolor sit amet.{" "}
                    </Link>
                  </h4>
                  <h5 className="date">May 14,2023</h5>
                  <hr />
                </div>
                <div className="blogs">
                  <h4>
                    <Link className="minorHead">
                      {" "}
                      Lorem ipsum dolor sit amet.{" "}
                    </Link>
                  </h4>
                  <h5 className="date">May 14,2023</h5>
                  <hr />
                </div>
                <div className="blogs">
                  <h4>
                    <Link className="minorHead">
                      {" "}
                      Lorem ipsum dolor sit amet.{" "}
                    </Link>
                  </h4>
                  <h5 className="date">May 14,2023</h5>
                  <hr />
                </div>
                <div className="blogs">
                  <h4>
                    <Link className="minorHead">
                      {" "}
                      Lorem ipsum dolor sit amet.{" "}
                    </Link>
                  </h4>
                  <h5 className="date">May 14,2023</h5>
                  <hr />
                </div>
              </div>

              <div className="categoriesBlog">
                <h4>Categories</h4>

                <h5>
                  <Link className="link"> Winter Arc </Link>
                </h5>
                <h5>
                  <Link className="link"> Flannel </Link>
                </h5>
                <h5>
                  <Link className="link"> Trendy Clothing </Link>
                </h5>
                <h5>
                  <Link className="link"> Summer Trend </Link>
                </h5>
                <h5>
                  <Link className="link"> Offwhite </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogcard;
