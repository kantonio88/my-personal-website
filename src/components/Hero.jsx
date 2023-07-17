import React from 'react';
import antonioImage from '../images/Antonio.Pro.image.png';

const Hero = () => {
  return (
    <section className="hero text-center py-5" style={{ background: "#b8c1ec" }}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5 d-flex justify-content-end">
            <div className="image-container my-0"> {/* Apply the custom class */}
              <img src={antonioImage} alt="Profile" className="profile-photo img-fluid shadow" style={{ maxWidth: '200px' }} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="hero-text text-dark">
              <h1>Hi, I am<br /><strong>Keston Antonio Schmidtgen</strong></h1>
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
