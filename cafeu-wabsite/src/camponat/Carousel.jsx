import React from 'react'
import Carouseldetials from './Carouseldetials'

function Carousel() {
  return (
    <div className="container">
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-indicators ">
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
<div className="carousel-item active">
<Carouseldetials img="src/assets/baner.png" title1="BBQ Chicken " title2="Salad" title3=" with Creamy Avocado"/>
</div>
<div className="carousel-item">
<Carouseldetials img="src/assets/baner1.png" title1="Asian Lettuce Wrap" title2="Chicken" title3=" Chopped Salad"/>
</div>
<div className="carousel-item">
<Carouseldetials img="src/assets/first-slider.png" title1="Different " title2="Spice" title3=" For A Different Taste"/>
</div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</div>
      </div>
  )
}

export default Carousel
