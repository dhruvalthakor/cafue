import React from "react";

function Maytoorder() {
  return (
    <>
      <div
        className="container "
        style={{ paddingTop: 105, paddingBottom: 105 }}
      >
        <div
          class="card mb-3 border border-0 order-container"
          style={{ height: "400px" }}
        >
          <div class="row g-0">
            <div class="col-md-7" style={{ padding: "50px" }}>
              <div class="card-body">
                <h2
                  class="card-title fw-bold mb-0"
                  style={{ fontsize: " 35px" }}
                >
                  Simple Way to Order <br />
                  Your Food Faster
                </h2>
                <p class="des my-4 my-md-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  eius- <br /> mod tempor incididunt ut labore et dolore magna
                  aliqua. Q ipsum <br /> suspendisse ultrices gravida. Risus
                  commodo viverra maeceas
                  <br /> accumsan lacus vel facilisis
                </p>
                <div className="d-flex gap-2 mt-4">
                  <a href="#" className="text-decoration-none mt-4">
                    {" "}
                    <img
                      src="/play-store.png"
                      alt=""
                      style={{ width: "151px" }}
                    />
                  </a>
                  <a href="#" className="text-decoration-none mt-4">
                    {" "}
                    <img
                      src="/apple.png"
                      alt=""
                      style={{ width: "151px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-5 col-md-3 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div class="app-img">
                <img
                  src="/app-2.png"
                  class="img-fluid rounded-start app-1"
                  alt="..."
                />
              </div>
              <div class="app-img2">
                <img
                  src="/app-1.png"
                  class="img-fluid rounded-start app-2"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maytoorder;
