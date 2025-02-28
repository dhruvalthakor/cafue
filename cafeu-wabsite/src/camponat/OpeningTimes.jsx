import React from 'react'

function OpeningTimes() {
    return (
        <>
            <div className="container-fluid mt-5 OpeningTimes">
                <div className="container">

                    <div class="card mb-3 bg-transparent shadow-none border border-0" >
                        <div class="row g-0">
                            <div class="col-md-6 col-xl-8 col-lg-7  mt-5">
                                <div class="card-body ">
                                    <div className="play-button" >
                                        <div className="icon"></div>
                                    </div>
                                    <h2 class="card-title fw-bold mb-0 text-white mt-3 mb-4" style={{ fontsize: " 35px" }}>We Have Excellent Of Quality<br />Japanese Food</h2>
                                    <p class="des my-4 my-md-2 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br />
                                        do eiusmod tempor incididunt ut labore et dolore</p>

                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4 col-lg-5 d-flex justify-content-center" >
                                <div className="  bg-white text-center p-5 mean-box" style={{ width: 410, marginTop: 100, height: 463 }}>
                                    <span className="card-title mean-title text-danger fs-5">Opening Times</span>
                                    <h1 className=" fw-bolder mb-3 mt-2 mb-4">Check Availability</h1>
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="mean-list">
                                                <p>Friday to Sunday</p>
                                                <p>06:00 - 09:00</p>
                                                
                                            </li>
                                            <li className="mean-list">
                                                <p>Friday to Sunday</p>
                                                <p>06:00 - 09:00</p>
                                            </li>
                                            <li className="mean-list">
                                                <p>Friday to Sunday</p>
                                                <p>06:00 - 09:00</p>
                                            </li>
                                            <li className="mean-list">
                                                <p>Friday to Sunday</p>
                                                <p>06:00 - 09:00</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <span className="card-title mean-title fs-5">Call Us Now</span>
                                        <h5 className="card-title mean-title fs-5">+993240-765230</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OpeningTimes

