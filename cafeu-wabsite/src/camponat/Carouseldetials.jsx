import React from "react";
import "../App.css";

function Carouseldetials(props) {
  return (
    <div className="card mb-3 bg-transparent shadow-none border-0 " style={{ Width: 540 }}>
      <div className="row g-0">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="card-body title-banara-main">
            <h5 className="card-title">
              <span className="sm-title mb-0 title-banara">Best In Cafeu</span>
            </h5>
            <h1 className="card-text">
              <p className="banner-title title-banara-1">
                {props.title1}
                <a href="#" className="text-danger">
                  {props.title2}
                </a>
                {props.title3}
              </p>
            </h1>
            <p className="card-text">
              <small className="text-body-secondary ">
                <p className="banner-des title-banara-2">
                  Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed do
                  eimod <br /> tempor incididunt ut labore et dolore magna
                  aliqua Quis
                </p>
              </small>
            </p>

             <div className="d-flex">
                <button type="button" className="btn btn-danger">Order Now</button>
                  <div className="play-button" style={{marginLeft:40,marginRight:10}}>
                     <div className="icon"></div>
                     </div>
                   <button type="button" className="btn fw-medium">Watch Video</button>
               </div>
          </div>
        </div>
        <div className="col-md-6">
          <img className="banar-img" src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Carouseldetials;
