import React ,{useState}from "react";
import { Link
 } from "react-router-dom";
 import logo from '../assets/bg.png';
const Header = () => {
    const [clicked,setclicked]=useState(false);
    return (
      <div>
       <nav>
        <div className="nav-logo"><Link to="/"><img src={logo}/></Link></div>
        <div>
            <ul className={`navbar`+` ${clicked? "":"active"}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/sponsors">Sponsors</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/team">Team</Link></li>
            </ul>
        </div>
        <div className="mobile">
        <i className={clicked? "fa-sharp fa-solid fa-x":"fa-solid fa-bars"} onClick={()=>{
            setclicked(!clicked);
        }}></i>
        </div>
       </nav>
      </div>
    );
  };
  
  export default Header;