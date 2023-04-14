import React ,{useEffect, useRef, useState}from "react";
import logo from "../assets/bg.png";
const Header = () => {
    const [clicked,setclicked]=useState(false);
    const [blurValue, setBlurValue] = useState(0);

    useEffect(() => {
      function handleScroll() {
        const newBlurValue = Math.min(10, window.scrollY / 100);
        setBlurValue(newBlurValue);
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
       <nav id="navbar" style={{ backdropFilter: `blur(${blurValue}px)` }}>
         <div className="nav-logo"><a href="#"><img src={logo}/></a></div>
        <div>
            <ul className={`navbar`+` ${clicked? "":"active"}`}>
              <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#gallery">Gallery</a></li>
                {/* <li><a href="#sponsors">Sponsors</a></li> */}
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