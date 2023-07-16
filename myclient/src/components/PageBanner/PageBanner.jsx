import React from "react";
import "../PageBanner/Pagebanner.css"

const PageBanner = (props) => {

    const name = props.name;
  return (
    <>
      <div className="container-fluid bannerBg">
        <div className="row">
          <div className="col-12">
            <div className="pageBanner">
                <h3>{name}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
