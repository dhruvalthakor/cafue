import React from 'react'
  import Navberdprops from './Navberdprops'
import "../App.css"
import Navber1 from './Navber1'

function Navbar() {
  return (
  <>
    <Navber1/>
    <nav className=" container navbar navbar-expand-lg d-none d-lg-block">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="src/assets/logo.png" alt="" /></a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
      <ul className="navbar-nav gap-3 d-flex  align-items-center justify-content-center" >
        
      <Navberdprops title="Home"/>
      <Navberdprops title="About Us"/>
      <Navberdprops title="Menu"/>
      <Navberdprops title="Blog"/>
      <Navberdprops title="Pages"/>
      <Navberdprops title="Contact"/>
      <li><i className="bi bi-search"></i></li>
      <li><a href="#" className="text-decoration-none text-black number"><img src="src/assets/call.png" alt="" /> +880 123 456 789</a></li>
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}

export default Navbar
