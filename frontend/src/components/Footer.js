import React from 'react';
import "./dump.css"
const Footer = () => {
  return (
    <div class="goot">
    <div class='Footer'>
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>We are New Spectrum <br /> A team from KMIT Project School</p>
          </div>
          <div className="col-md-4">
            <h3>Contact</h3>
            <p>Email: Rohit@gmail.com</p>
            <p>Phone: 1234521575</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <div className="d-flex">
              <a href="#"><i className="fa fa-facebook mr-3"></i></a>
              <a href="#"><i className="fa fa-twitter mr-3"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light text-center py-3">
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </div>
    </footer>
    </div>
    </div>
  );
};

export default Footer;
