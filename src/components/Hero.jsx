import React from 'react';
import antonioImage from '../images/Antonio.Pro.image.png';

const Hero = () => {
  return (
    <section className="text-center py-5" style={{ background: "#b8c1ec" }}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5 d-flex justify-content-end">
            <div className="image-container">
              <img src={antonioImage} alt="Profile" className="profile-photo img-fluid shadow" style={{ maxWidth: '300px' }} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-dark">
              <h1>Hi, I am<br /><strong>Keston Antonio Schmidtgen</strong></h1>
              <h3 className="text-white py-4">Frontend Developer</h3>
              <button className="btn btn-lg" href="#contact" style={{ background: "#eebbc3" }}>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
