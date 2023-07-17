import React from 'react';

const About = () => {
  return (
    <section id="about" className="about py-5 text-center" style={{ background: "#b8c1ec" }}>
      <div className="container">
        <h2 className="py-2 text-light mb-5">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-text">
              <h3>Frontend Web Developer</h3>
              <p className="fs-5">
                I am Keston Antonio Schmidtgen, a skilled frontend developer passionate about creating visually appealing and intuitive user experiences. Experienced in HTML, CSS, JavaScript, as well as frameworks like React and Vue.js, I am dedicated to delivering exceptional results. Explore my portfolio to witness my expertise in transforming ideas into captivating digital experiences.
              </p>
              <p className="fs-5">
                If you believe my skills align with your company's vision, I would be delighted to discuss collaboration opportunities. I am eager to contribute my expertise to drive innovation and deliver exceptional frontend solutions.
              </p>
              <p className="fs-5">
                Thank you for considering me. I look forward to the opportunity of making a meaningful impact in your esteemed organization. Please reach out to me to discuss how we can work together.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src="https://via.placeholder.com/300" alt="About Me" className="about-photo img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
