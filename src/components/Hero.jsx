import React from 'react';

const Hero = () => {
  return (
    <section className="hero text-center py-5" style={{ background: "#b8c1ec" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <img src="https://via.placeholder.com/300" alt="Profile" className="profile-photo img-fluid" />
          </div>
          <div className="col-md-5">
            <div className="hero-text text-dark">
              <h1>Hi, I am</h1>
              <h1>Keston Antonio Schmidtgen</h1>
              <h3>Frontend Developer</h3>
              <button className="btn btn-lg" style={{ background: "#eebbc3" }}>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
