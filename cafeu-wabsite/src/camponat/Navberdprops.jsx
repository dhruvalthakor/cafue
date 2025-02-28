import React from 'react'
import "../App.css"

function Navberdprops(props) {
  return (
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle menu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      {props.title}
    </a>
    <ul className="dropdown-menu nev-detils">
      <li><a className="dropdown-item" href="#">{props.item1}</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </li>
  )
}

export default Navberdprops
