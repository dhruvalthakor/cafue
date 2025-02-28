import React from 'react'
import "../App.css"

function Feacher() {
  return (
    <div className="container" >
      <div className="d-flex justify-content-center gap-4 flex-wrap" style={{marginTop:100,marginBottom:100}}>
        


      <div className="card d-flex justify-content-center align-items-center px-2 card-p" style={{width: "19rem",paddingTop:30,paddingBottom:30}}>
  <img src="src/assets/1.png" className="card-img-top object-fit-contain" style={{width:85}} alt="..."/>
  <div className="card-body d-flex justify-content-center  align-items-center flex-column">
    <h5 className="card-title "><a href="#" className="text-decoration-none text-dark fw-bold">100% Swiss Quality</a></h5>
    <p className="card-text fw-medium text-center cart-dec" style={{
  }}>Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
    <a href="#" className="discover-bt">Discover More</a>
  </div>
</div>

<div className="card d-flex justify-content-center align-items-center" style={{width: "19rem",paddingTop:30,paddingBottom:30}}>
  <img src="src/assets/2.png" className="card-img-top object-fit-contain" style={{width:85}} alt="..."/>
  <div className="card-body d-flex justify-content-center align-items-center flex-column">
  <h5 className="card-title "><a href="#" className="text-decoration-none text-dark fw-bold">Organic Production</a></h5>
    <p className="card-text fw-medium text-center" style={{
   fontSize:15,
    lineHeight:1.8,
    marginBottom:15,   
}}>Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
    <a href="#" className="discover-bt">Discover More</a>
  </div>
</div>

<div className="card d-flex justify-content-center align-items-center" style={{width: "19rem",paddingTop:30,paddingBottom:30}}>
  <img src="src/assets/3.png" className="card-img-top object-fit-contain" style={{width:85}} alt="..."/>
  <div className="card-body d-flex justify-content-center align-items-center flex-column">
  <h5 className="card-title "><a href="#" className="text-decoration-none text-dark fw-bold">Food Law Certifie</a></h5>
    <p className="card-text fw-medium text-center" style={{
   fontSize:15,
    lineHeight:1.8,
    marginBottom:15,
}}>Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
    <a href="#" className="discover-bt">Discover More</a>
  </div>
</div>

<div className="card d-flex justify-content-center align-items-center" style={{width: "19rem",paddingTop:30,paddingBottom:30}}>
  <img src="src/assets/4.png" className="card-img-top object-fit-contain" style={{width:85}} alt="..."/>
  <div className="card-body d-flex justify-content-center align-items-center flex-column">
  <h5 className="card-title "><a href="#" className="text-decoration-none text-dark fw-bold">Food Production</a></h5>
    <p className="card-text fw-medium text-center" style={{
   fontSize:15,
    lineHeight:1.8,
    marginBottom:15,
}}>Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
    <a href="#" className="discover-bt">Discover More</a>
  </div>
</div>



      </div>
    </div>
  )
}

export default Feacher
