import phone from '../assets/contactpageimg/phone.png';
const Footer = () => {
  return (
    <div className="footer-page" id="contact">
      <footer className="footer">
  	 <div className="footer-container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Go to</h4>
  	 			<ul>
  	 				<li><a href="#about">About us</a></li>
  	 				<li><a href="#gallery">Gallery</a></li>
  	 				<li><a href="#sponsors">Sponsors</a></li>
  	 				<li><a href="#team">Team</a></li>
  	 			</ul>
  	 		</div>
  	 		{/* <div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div> */}
  	 		<div className="footer-col">
  	 			<h4>Contact</h4>
  	 			<ul>
  	 				<li><img src={phone} className="icon" alt="" />
              <p>Mayank: 9560585673</p></li>
  	 				<li><img src={phone} className="icon" alt="" />
              <p>Abhay: 8588016266</p></li>
  	 				<li><img src={phone} className="icon" alt="" />
              <p>Bishwajeet: 9654367034</p></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				{/* <a href="#"><i className="fab fa-facebook-f"></i></a> */}
  	 				<a href="https://twitter.com/prakriti_msit" target="_blank"><i className="fab fa-twitter"></i></a>
  	 				<a href="https://www.instagram.com/prakriti_msit/" target="_blank"><i className="fab fa-instagram"></i></a>
  	 				<a href="https://www.linkedin.com/company/prakritimsit/mycompany/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

    </div>
  )
}


export default Footer