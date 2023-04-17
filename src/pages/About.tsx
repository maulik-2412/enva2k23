const About = () => {
  return (
    <div className="about-page" id="about">
      <div className="about-section">
        <div className="about-event">
          <h1>ABOUT THE EVENT</h1>

          <p className="about-p">
            ENVA, the annual college Fest, organised by Prakriti MSIT is a
            fun-packed, frolicsome event which is a 2-day-long event held in
            April. The fest not only sees involvement of students, but also
            teachers, showcasing wholesome senior-junior interaction. With a
            plethora of exciting events, enjoyable activities and amazing prizes
            to be won, it ensures everlasting fun..
          </p>
        </div>
        <div className="where">
          <h3>WHERE</h3>
          <p className="where-p">Maharaja Surajmal Institute Of Technology, New Delhi</p>
          
          <p className="where-p">19-20 April 2023</p>
          
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.278080845677!2d77.09177546572111!3d28.62142665207213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04afb8dbcfe1%3A0xaff19e718be2136b!2sMaharaja%20Surajmal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1681637696392!5m2!1sen!2sin"  loading="lazy" className="about-map"></iframe>
      </div>
    </div>
  );
};

export default About;
