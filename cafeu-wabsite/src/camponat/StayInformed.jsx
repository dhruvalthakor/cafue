import React from "react";

function StayInformed() {
  return (
    <div
      className=" StayInformed"
    >
      <div className="subscribe" style={{padding:100}}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 my-2" >
              <h4 className="subs-title text-white fw-bold fs-3">Stay Informed About Special Offers</h4>
              <p className="subs-des mb-0 text-white fw-bold fs-6">
                For Exclusive Deals, Coupons, News and More!
              </p>
            </div>
            <div className="col-md-6">
              <div className=" d-flex align-items-center">
                <form className=" w-100">
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Enter Your Email" value="" fdprocessedid="0yv19o"/>
                    <button type="submit" className="custom-btn" >
                     <i className="fa-solid fa-location-arrow fa-lg" style={{color: "#f5f5f5"}}></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StayInformed;
