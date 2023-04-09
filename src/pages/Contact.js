import React from "react";
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
    <div class="container">
      <Particle />
      <span class="big-circle"></span>
      <img src="" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Reach Out</h3>
          <p class="text">
          
          </p>

          <div class="info">
            <div class="information">
              <img src={location} class="icon" alt="" />
              <p>C-4 MARKET, Janakpuri, New Delhi</p>
            </div>
            <div class="information">
              <img src={email} class="icon" alt="" />
              <p>prakriti@msit.in</p>
            </div>
            <div class="information">
              <img src={phone} class="icon" alt="" />
              <p>Mayank: 9560585673</p>

              <img src={phone} class="icon" alt="" />
              <p>Parth: 9999554630</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">

              <a href="https://twitter.com/prakriti_msit"
                target="_blank"
                alt="twitter"
                rel="noreferrer">
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/prakriti_msit/"
                target="_blank"
                alt="insta"
                rel="noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/prakritimsit/mycompany/"
                target="_blank"
                alt="linkedin"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" />
              <label for="">Name</label>
              <span>Name</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
