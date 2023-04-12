import React from "react";
import Particle from "../components/Particle";
import img from '../assets/images/adidas.png'
// import imgg from '../assets/images/imageeee.jpg'

function Sponsors() {
  return (
    <div className="sponsor-page"id="sponsors">

      <div className="sponsor-container">
        <h2 className="sponsor-heading">Our Partners</h2>
        <section className="sponsor-image-container">
            <div className="slide"><img src={img} alt="logo"/></div>
            <div className="slide"><img src={img} alt="logo"/></div>
            <div className="slide"><img src={img} alt="logo"/></div>
            <div className="slide"><img src={img} alt="logo"/></div>
            <div className="slide"><img src={img} alt="logo"/></div>
            <div className="slide"><img src={img} alt="logo"/></div>
            <div className="slide"><img src={img} alt="logo"/></div>      
        </section>
    </div>  
    </div>
  );
}

export default Sponsors;
