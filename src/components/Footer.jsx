import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-white py-3" style={{ background: "#232946" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="social-icons">
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-center">&copy; 2023 Keston Antonio Schmidtgen. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
