import React from "react";
import Particle from "../components/Particle";
const About = () => {
  return (
    <div>
      <Particle />
      <div className="about-section">
        <div className="about-event">
          <h1>
            ABOUT THE EVENT
          </h1>

          <p>
            ENVA, the annual college Fest, organised by Prakriti MSIT is a
            fun-packed, frolicsome event which is a 2-day-long event held in
            January. The fest not only sees involvement of students, but also
            teachers, showcasing wholesome senior-junior interaction. With a
            plethora of exciting events, enjoyable activities and amazing prizes
            to be won, it ensures everlasting fun..
          </p>
        </div>
        <div className="where">
          <h3>WHERE</h3>
          <p>Maharaja Surajmal Institute Of Technology, New Delhi</p>
        </div>
        <div className="when">
          <h3>WHEN</h3>
          <p>Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default About;
