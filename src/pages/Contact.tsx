import Particle from "../components/Particle";
import email from "../assets/contactpageimg/email.png";
import location from "../assets/contactpageimg/location.png";
import phone from "../assets/contactpageimg/phone.png";
import shape from "../assets/contactpageimg/shape.png";
import { useEffect } from "react";
const Contact = () => {

  useEffect(()=>{
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }
    
    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }
    
    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
    return ()=>{
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    }
  },[])
  return (
    <div className="container">
      <Particle />
      <span className="big-circle"></span>
      <img src="" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Reach Out</h3>
          <p className="text">
          
          </p>

          <div className="info">
            <div className="information">
              <img src={location} className="icon" alt="" />
              <p>C-4 MARKET, Janakpuri, New Delhi</p>
            </div>
            <div className="information">
              <img src={email} className="icon" alt="" />
              <p>prakriti@msit.in</p>
            </div>
            <div className="information">
              <img src={phone} className="icon" alt="" />
              <p>Mayank: 9560585673</p>

              <img src={phone} className="icon" alt="" />
              <p>Parth: 9999554630</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">

              <a href="https://twitter.com/prakriti_msit"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/prakriti_msit/"
                target="_blank"

                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/prakritimsit/mycompany/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Name</label>
              <span>Name</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
