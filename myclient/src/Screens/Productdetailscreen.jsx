import React from "react";
import Pagebanner from "../components/PageBanner/PageBanner";
import Productdetails from "../components/ProductDetail/Productdetails";
import Productdetailsreview from "../components/ProductDetail/Productdetailsreview";
const Productdetailscreen = () => {
  return (
    <>
      <Pagebanner name="Product Details"/>

      <div className="container-lg" style={{marginTop: "-7rem"}}>
        <div className="row justify-content-center">
          <div className="col-12">
            <Productdetails />
          </div>
        </div>
      </div>

      <Productdetailsreview />
    </>
  );
};

export default Productdetailscreen;
