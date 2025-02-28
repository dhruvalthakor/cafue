import React from 'react'

function Card(props) {
  return (
    <>
      <div className="card  border-0 card" style={{width: "406px",}}>
  <img  src={props.img} className="w-100 img-fluid"  alt={props.title}/>
  <div className="card-body mx-3">
    <h5 className="card-title mb-3">{props.title}</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus turpis</p>
    <a href="#" className=" text-decoration-none text-danger">Delivery Fee : $10</a>
  </div>
    {/* <button className="btn btn-danger position-absolute top-0 left-0 w-25">${props.price}</button> */}
</div>
    </>
  )
}

export default Card
