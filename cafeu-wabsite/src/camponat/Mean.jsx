import React from 'react'
import Card from './Card'

function Mean() {
  return (
    <>
      <div className="container d-flex justify-content-center flex-column align-items-center" style={{ paddingTop:105,paddingBottom:105,backgroundImage:'url("/bg.jpg")'}}>
      <span className="card-title mean-title text-danger fs-4">Special Menu</span>
      <h1 className=" fw-bolder mb-3 mt-2 mb-4">Our Specials Menu</h1>
      <ul className="nav nav-pills mb-3 nav-underline  gap-4 justify-content-center" id="pills-tab" role="tablist">
   <li className="nav-item" role="presentation">
    <button className="nav-link active mean-title mean-title-color bg-white fs-4 d-flex flex-column align-items-center" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home " aria-selected="true"  style={{color: "#666"}}>
    <img className="w-100" src="/7.png" style={{height:72}} alt="" />
      All
      </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link mean-title mean-title-color bg-white fs-4 d-flex flex-column align-items-center " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" style={{color: "#666"}}><img className="w-100" src="/1 (1).png" style={{height:72}} alt="" />
   Pizza</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link mean-title mean-title-color bg-white fs-4 d-flex flex-column align-items-center" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" style={{color: "#666"}}><img className="w-100" src="/2 (1).png" style={{height:72}} alt="" />
   Asian</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link mean-title mean-title-color bg-white fs-4 d-flex flex-column align-items-center" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" style={{color: "#666"}}><img className="w-100" src="/3 (1).png" alt="" style={{height:72}} />
  Burger</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link mean-title mean-title-color bg-white fs-4 d-flex flex-column align-items-center" id="pills-Salad-tab" data-bs-toggle="pill" data-bs-target="#pills-Salad" type="button" role="tab" aria-controls="pills-Salad" aria-selected="false" style={{color: "#666"}}><img className="w-100" src="/4 (1).png" alt="" style={{height:72}} />
  Salad</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link mean-title mean-title-color bg-white fs-4 d-flex flex-column align-items-center" id="pills-Bakery-tab" data-bs-toggle="pill" data-bs-target="#pills-Bakery" type="button" role="tab" aria-controls="pills-Bakery" aria-selected="false" style={{color: "#666"}}><img className="w-100" src="/5 (1).png" alt="" style={{height:72}} />
  Bakery</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link mean-title mean-title-color bg-white fs-4 d-flex flex-column align-items-center" id="pills-Drink-tab" data-bs-toggle="pill" data-bs-target="#pills-Drink" type="button" role="tab" aria-controls="pills-Drink" aria-selected="false" style={{color: "#666"}}><img className="w-100" src="/6 (1).png" alt="" style={{height:72}} />
  Drink</button>
  </li>
</ul>
<div className="tab-content mt-3" id="pills-tabContent">
  <div className="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
  <div className="d-flex gap-4 flex-wrap justify-content-center">
  <Card img="/pizza.png" title="Margherita Pizza" price="233  "/>
    <Card img="/chicken.png" title="Chicken Alfredo" price="233  "/>
    <Card img="/barger.png" title="Caesar Salad" price="233  "/>
    <Card img="/Coleslaw.png" title="Coleslaw" price="233  "/>
    <Card img="/chocolate.png" title="Chocolate Brownie" price="233"/>
    <Card img="/stir-fry.png" title="Vegetable Stir-Fry" price="233 " />
  </div>
  </div>
  <div className="tab-pane fade " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
  <div className="d-flex gap-4 flex-wrap justify-content-center">
  <Card img="/pizza.png" title="Margherita Pizza" price="233  "/>
    <Card img="/chicken.png" title="Chicken Alfredo" price="233  "/>
    <Card img="/barger.png" title="Caesar Salad" price="233  "/>
    <Card img="/Coleslaw.png" title="Coleslaw" price="233  "/>
    <Card img="/chocolate.png" title="Chocolate Brownie" price="233  "/>
    <Card img="/stir-fry.png" title="Vegetable Stir-Fry" price="233  "/>
  </div>
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">2</div>
  <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">3</div>
  <div className="tab-pane fade" id="pills-Salad" role="tabpanel" aria-labelledby="pills-Salad-tab" tabIndex="0">4</div>
  <div className="tab-pane fade" id="pills-Bakery" role="tabpanel" aria-labelledby="pills-Bakery-tab" tabIndex="0">5</div>
  <div className="tab-pane fade" id="pills-Drink" role="tabpanel" aria-labelledby="pills-Drink-tab" tabIndex="0">6</div>
</div>
      </div>
    </>
  )
}

export default Mean
