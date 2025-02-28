import React from 'react'
import "../App.css"

function Aboutus() {
  return (
    <>
      <div className="container" style={{ paddingTop:105,paddingBottom:105}}>
<div className="card mb-3 border-0" style={{maxwidth: "540px"}}>
  <div className="row g-0 d-flex align-items-center justify-content-center">
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <img src="src/assets/exparience.png" className=" img-thumbnail border-0" alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
      <span className="card-title about-titte">About Us</span>
      <h2 className=" fw-bolder mb-3">Why We Are The Best</h2>
      <p className="about-des mb-4">Quis autem vel eum iure reprehenderit qui in evoluptate velit esse qua nihil<br/> molestiae consequatur, vel illum qui dolorem eum fugiat quvoluptas nulla <br/> pariatureaque ipsa quae ab illo inventore veritatis et quasi architecto <br/> beatae vitae dicta sunt explicabo.</p>
      <div className="service-list">
        <ul className="service-ul list-unstyled">
            <li className="ab-service-li mb-4 d-flex align-items-center  gap-4">
                <div className="service-icon">
                    <img src="src/assets/5.png" alt=""/>
                    </div>
                    <div className="service-name-des ms-2">
                        <h5 className="service-name mb-1 mt-1 fw-bolder">Buffet Service</h5>
                        <p className="service-des">Qariatureaque ipsa quae a illo inventore <br/> veritatis et quasi architecto</p>
                        </div>
                        </li>
                        <li className="ab-service-li mb-4 d-flex align-items-center  gap-4">
                        <div className="service-icon">
                                <img src="src/assets/6.png" alt=""/>
                                </div>
                                <div className="service-name-des ms-2">
                                <h5 className="service-name mb-1 mt-1 fw-bolder">Online Booking</h5>
                                <p className="service-des">Qariatureaque ipsa quae a illo inventore <br/> veritatis et quasi architecto</p>
                            </div>
                        </li>
         </ul>
         <button type="button" className="btn btn-danger px-4 py-2 fw-semibold">About Us</button>
    </div>
      </div>
    </div>
  </div>
</div>


</div>
    </>
  )
}

export default Aboutus
