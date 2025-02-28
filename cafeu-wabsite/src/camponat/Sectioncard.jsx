import React from 'react'

function Sectioncard(props) {
  return (
    <>
      <div class="card rounded rounded-0 shadow position-relative" style={{width: "25rem"}}>
  <img src={props.img}  alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.title}</p>
    <div className="team-card"></div>
  </div>
</div>
    </>
  )
}

export default Sectioncard
