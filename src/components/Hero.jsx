import React from 'react';
import antonioImage from '../images/Antonio.Pro.image.png';

const Hero = () => {
  return (
    <section className="text-center py-5" style={{ background: "#b8c1ec" }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5">
            <div className="text-dark">
              <h1 className="display-1">Hi, I'm Antonio</h1>
              <p className="text-white display-6">Frontend Developer</p>
              <button className="btn btn-lg" href="#contact" style={{ background: "#232946", color: "#b8c1ec" }}>Contact</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="image-container">
              <img src={antonioImage} alt="Profile" className="profile-photo" style={{ maxWidth: '300px' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
