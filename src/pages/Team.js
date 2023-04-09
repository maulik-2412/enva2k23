import React from 'react'
import Particle from "../components/Particle";
// import imgg from '../assets/images/img.jpg'
import yash from '../assets/team/yash.jpg'
import amit from '../assets/team/amit.jpg'
import maulik from '../assets/team/maulik.jpeg'

const Team = () => {
  return (
    <div>
    <Particle/>
<section className="team">
		<div className="center">
			<h1>Our Team</h1>
		</div>

		<div className="team-content">
			<div className="box">
          <img src={yash}/>
				<h3>Yash</h3>
				<h5>Full Stack Web Developer</h5>
				<div className="icons">
					<a href="https://github.com/yashc88"><i className="fa-brands fa-github"></i></a>
					<a href="https://www.linkedin.com/in/yash-c88/"><i className="fa-brands fa-linkedin"></i></a>
					<a href="https://instagram.com/yashchoudhary._88?igshid=ZDdkNTZiNTM="><i className="fa-brands fa-instagram"></i></a>
				</div>
			</div>

			<div className="box">
          <img src={amit}/>
				<h3>Amit</h3>
				<h5>Full Stack Web Developer</h5>
				<div className="icons">
					<a href="https://github.com/amitjimiwal"><i className="fa-brands fa-github"></i></a>
					<a href="https://www.linkedin.com/in/amitjimiwal/"><i className="fa-brands fa-linkedin"></i></a>
					<a href="https://instagram.com/_amit.jimiwal_?igshid=ZDdkNTZiNTM="><i className="fa-brands fa-instagram"></i></a>
				</div>
			</div>

			<div className="box">
          <img src={maulik}/>
				<h3>Maulik</h3>
				<h5>Full Stack Web Developer</h5>
				<div className="icons">
					<a href="https://github.com/maulik-2412"><i className="fa-brands fa-github"></i></a>
					<a href="https://www.linkedin.com/in/maulik-tyagi-90aa09229/"><i className="fa-brands fa-linkedin"></i></a>
					<a href="https://www.instagram.com/maulik_2412/"><i className="fa-brands fa-instagram"></i></a>
				</div>
			</div>


		</div>
	</section>

    </div>
  )
}

export default Team