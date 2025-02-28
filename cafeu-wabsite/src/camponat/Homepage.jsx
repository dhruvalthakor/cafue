import React from 'react'
import "../App.css"
import Navbar from './Navbar'
import Carousel from './Carousel'


function Homepage() {
  return (
    <div className="homepage">
      <Navbar/>
     <div className="container mt-5">
     <Carousel/>
     </div>
     <div className="side-box">
     <ul className="right-social-ul d-flex gap-5 list-unstyled socile-meida">
      <li><a href="#" className="share-link text-decoration-none" style={{ color: 6666}}>Facebook</a></li>
      <li><a href="#" className="share-link text-decoration-none">Twitter</a></li>
      <li><a href="#" className="share-link text-decoration-none">Instagram</a></li>
      </ul>
     </div>
    </div>
  )
}

export default Homepage
