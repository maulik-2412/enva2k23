import React ,{useState}from "react";
import { Link
 } from "react-router-dom";
import logo from "../assets/bg.png";
const Header = () => {
    const [clicked,setclicked]=useState(false);
    return (
       <nav>
         <div className="nav-logo"><a href="#"><img src={logo}/></a></div>
        <div>
            <ul className={`navbar`+` ${clicked? "":"active"}`}>
              <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#sponsors">Sponsors</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#team">Team</a></li>
            </ul>
        </div>
        <div className="mobile">
        <i className={clicked? "fa-sharp fa-solid fa-x":"fa-solid fa-bars"} onClick={()=>{
            setclicked(!clicked);
        }}></i>
        </div>
       </nav>

    );
  };
  
  export default Header;