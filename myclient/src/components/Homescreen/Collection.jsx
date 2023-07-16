import React from "react";
import { NavLink } from "react-router-dom";

import item1 from "../../images/product1.jpg";
import item2 from "../../images/product2.jpg";
import item3 from "../../images/product3.jpg";

const Collection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="homeCollection">
              <h2>Popular Collection</h2>
              <p>
                Explore the best trends for girls and women at SaleHub! Clothes,
                shoes and cool accessories for a new season are available now at
                SaleHub online.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="collecItemContainer">
              <div className="collecItemOne">
                <NavLink to="/product">
                  <div className="itemImg">
                    <img src={item1} alt="" />
                  </div>
                  <div className="itemText">
                    <h4>DENIM-PANT</h4>
                    <p>14 Denim-Pants Outfits to Live in Now That It Is Fall</p>
                    <h5>
                      <NavLink to="/products" className="link">
                        SHOP THE COLLECTION
                      </NavLink>
                    </h5>
                  </div>
                </NavLink>
              </div>

              <div className="collecItemTwoContainer">
                <div className="collectItemTwoChildone">
                  <NavLink to="/product">
                  <div className="childoneImg">
                    <img src={item2} alt="Denim Jacket" />
                  </div>
                  <div className="childoneText">
                    <h4>DENIM-JACKET</h4>
                    <p>
                      14 Denim-Jackets Outfits to Live in Now That It Is Fall
                    </p>
                    <h5>
                      <NavLink to="/products" className="link">
                        SHOP THE COLLECTION
                      </NavLink>
                    </h5>
                  </div>
                  </NavLink>
                </div>
                <div className="collectItemTwoChildone">
                  <NavLink to="/product">
                  <div className="childoneImg">
                    <img src={item3} alt="" />
                  </div>
                  <div className="childoneText">
                    <h4>HOODIES</h4>
                    <p>14 Hoodies Outfits to Live in Now That It Is Fall</p>
                    <h5>
                      <NavLink to="/products" className="link">
                        SHOP THE COLLECTION
                      </NavLink>
                    </h5>
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

export default Collection;
