import React from "react";
import Img1 from '../../images/summerimg.jpg'

const Promotion = () => {
  return (
    <>
      <div className="container-fluid marginTop">
        <div className="row">
          <div className="col-12 px-0">
            <div className="promotionContainer">
              <div className="promoLeft">
                <h5>SUMMER TRENDS</h5>
                <h2>Our Must Haves</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis consectetur molestias, esse quos qui exercitationem
                  at consequuntur excepturi! Reiciendis soluta mollitia quas
                  dignissimos totam a voluptate fuga vero est velit.
                </p>
                <button className="shopBtn">Shop Now
                </button>
              </div>
              <div className="promoRight">
                  <img src={Img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotion;
