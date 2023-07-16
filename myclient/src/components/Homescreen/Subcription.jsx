import React from "react";

const Subcription = () => {
  return (
    <>
      <div className="container-fluid subMargintop">
        <div className="row">
          <div className="col-12">
            <div className="subContainer">
              <h2>Get Discoiunt Info</h2>
              <p>
                Subscribe to the SHOP mailing list to receive updates on new
                arrivals, special offers and other discount information.
              </p>

              <div className="discForm">
                <form action="">
                  <input type="email" />
                  <button className="SubsBtn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subcription;
