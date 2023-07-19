import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./dump.css";

const Navbarltst = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/login');
  };

  const handleWhatsAppShare = () => {
    const url = window.location.href;
    const encodedUrl = encodeURIComponent(url);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedUrl}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
      <div className="container-fluid">
        <a href="/" className='logo'><img src="https://img.freepik.com/free-vector/shining-bright-light-bulb-with-cogs_3446-347.jpg?size=626&ext=jpg" alt="LOGO" height="40px" width="40px" /></a>
        <h className="navbar-brand title" style={{ fontSize: '24px', padding: '1%' }}>New Spectrum</h>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex">
              <a className="nav-link active" href="/about">
                <FaUser className="user-icon" /> About Us
              </a>
              <a className="nav-link active" href="/login">
                <FaUser className="user-icon" /> Login
              </a>
              <a className="nav-link active" href="/signup">
                <FaUser className="user-icon" /> Signup
              </a>
              <a className="nav-link active" href="/profile">
                <FaUser className="user-icon" /> Profile
              </a>
              <a className="nav-link active" onClick={handleLogoutClick}>
                <FaUser className="user-icon" /> Logout
              </a>
              {/* <a className="nav-link active" onClick={handleWhatsAppShare}>Share</a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbarltst;
