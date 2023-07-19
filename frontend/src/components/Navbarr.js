import React from 'react';
import "./dump.css"
function Navbarr() {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/"><img src="https://i.ibb.co/MRLk6B9/photo-2022-12-09-12-52-44.jpg" alt="LOGO" height="50px" width="50px" border="0" /></a>

                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li>
                                <h2 className='head'> NEW SPECTRUM</h2>
                            </li>
                            {/* <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#Tech">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Page 1-1</a></li>
                  <li><a href="#">Page 1-2</a></li>
                  <li><a href="#">Page 1-3</a></li>
                </ul>
              </li>  */}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {/* <li className="dropdown">
                <button className="notification dropdown-toggle" data-toggle="dropdown">Notifications <span className="caret"><span className="badge">3</span></span></button>
                <ul className="dropdown-menu">
                  <li><a href="#">Notification 1</a></li>
                  <li><a href="#">Notification 2</a></li>
                  <li><a href="#">Notification 3</a></li>
                </ul>
              </li> */}
                            <li><a href="/about"><span class="glyphicon glyphicon-user"></span> About us</a></li>
                            <li><a href="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbarr;
