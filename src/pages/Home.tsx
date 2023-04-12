import React from "react";
import Particle from "../components/Particle";

const Home = () => {
  return (
    <div className="home-content">
      <div className="home-page">
        {/*<Title/>*/}
        <svg viewBox="0 0 600 300">
          {/* Symbol*/}
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">
              ENVA '23
            </text>
          </symbol>
          {/* Duplicate symbols*/}
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          {/* Insert SVG code */}
          <g
            dangerouslySetInnerHTML={{
              __html: `
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="50%" dy=".35em">ENVA '23</text>
      </symbol>
      <use class="text" xlink:href="#s-text" />
      <use class="text" xlink:href="#s-text" />
      <use class="text" xlink:href="#s-text" />
      <use class="text" xlink:href="#s-text" />
      <use class="text" xlink:href="#s-text" />
    `,
            }}
          />
        </svg>
      </div>
      <h1 className="coming-soon">19-20 April 2023</h1>
    </div>
  );
};

export default Home;
