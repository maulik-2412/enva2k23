import React from 'react'
import img from '../assets/images/img.jpg'

import Particle from '../components/Particle'

const Gallery = () => {
  return (
    <div class="gallery_page">
      <Particle/>
      <div class="portfolio">

  <a href="#" class="card">
    <div class="content">
      <span class="title">Web Design</span>
      <span class="category">Mobile / Design / Rebranding</span>
    </div>
    <div class="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" class="card">
    <div class="content">
      <span class="title">UX Design</span>
      <span class="category">UX / UI / Research </span>
    </div>
    <div class="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" class="card">
    <div class="content">
      <span class="title">Concepts</span>
      <span class="category">Design / Creative</span>
    </div>
    <div class="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" class="card">
    <div class="content">
      <span class="title">Creative & Cool</span>
      <span class="category">Design / Food</span>
    </div>
    <div class="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" class="card">
    <div class="content">
      <span class="title">AR-VR</span>
      <span class="category">VR / AR / Creative</span>
    </div>
    <div class="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" class="card">
    <div class="content">
      <span class="title">Logo</span>
      <span class="category">Design / Logo / Clothing</span>
    </div>
    <div class="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" class="card">
    <div class="content">
      <span class="title">Art</span>
      <span class="category">Drawing / Painting / Abstract</span>
    </div>
    <div class="image">
      <img src={img} alt="" />
    </div>
  </a>

  <a href="#" class="card">
    <div class="content">
      <span class="title">Native Apps</span>
      <span class="category">Coding / Mobile </span>
    </div>
    <div class="image">
      <img src={img} alt="" />
    </div>
  </a>

</div>
    </div>
  )
}

export default Gallery