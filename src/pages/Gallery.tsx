import img from '../assets/images/img.jpg'

import Particle from '../components/Particle'

const Gallery = () => {
  return (
    <div className="gallery_page">
      <Particle/>
      <div className="portfolio">

  <a href="#" className="card">
    <div className="content">
      <span className="title">Web Design</span>
      <span className="category">Mobile / Design / Rebranding</span>
    </div>
    <div className="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" className="card">
    <div className="content">
      <span className="title">UX Design</span>
      <span className="category">UX / UI / Research </span>
    </div>
    <div className="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" className="card">
    <div className="content">
      <span className="title">Concepts</span>
      <span className="category">Design / Creative</span>
    </div>
    <div className="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" className="card">
    <div className="content">
      <span className="title">Creative & Cool</span>
      <span className="category">Design / Food</span>
    </div>
    <div className="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" className="card">
    <div className="content">
      <span className="title">AR-VR</span>
      <span className="category">VR / AR / Creative</span>
    </div>
    <div className="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" className="card">
    <div className="content">
      <span className="title">Logo</span>
      <span className="category">Design / Logo / Clothing</span>
    </div>
    <div className="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" className="card">
    <div className="content">
      <span className="title">Art</span>
      <span className="category">Drawing / Painting / Abstract</span>
    </div>
    <div className="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" className="card">
    <div className="content">
      <span className="title">Native Apps</span>
      <span className="category">Coding / Mobile </span>
    </div>
    <div className="image">
      <img src={img} alt="" />
    </div>
  </a>

</div>
    </div>
  )
}

export default Gallery