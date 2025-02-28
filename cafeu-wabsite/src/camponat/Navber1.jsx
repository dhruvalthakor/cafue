import React from 'react'
import Navberdprops from './Navberdprops'
import "../App.css"
function Navber1() {
  return (
    <>
      <nav className="container navbar  d-lg-none ">
  <div className="container-fluid">
  <a className="navbar-brand" href="#"><img src="src/assets/logo.png" alt=""/></a>
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    <div className="dr-navbar-sign menu-tab" role="button">
        <span className="dr-line-1"></span>
        <span className="dr-line-2"></span>
        <span className="dr-line-3"></span>
        </div>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
      <a className="navbar-brand" href="#"><img src="src/assets/logo.png" alt=""/></a>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
      <ul className="navbar-nav gap-3 d-flex  align-items-center justify-content-center" >
        
        <Navberdprops title="Home"/>
        <Navberdprops title="About Us"/>
        <Navberdprops title="Menu"/>
        <Navberdprops title="Blog"/>
        <Navberdprops title="Pages"/>
        <Navberdprops title="Contact"/>
        
        </ul>
       
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navber1
