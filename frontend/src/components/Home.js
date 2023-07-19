import React from 'react';

function Home()
{
    return (
        <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                    </button>
                    {/* <!-- <a class="navbar-brand" href="#Home">--> */}<a href="#Home"><img src="https://i.ibb.co/MRLk6B9/photo-2022-12-09-12-52-44.jpg" alt="LOGO" height="50px" width="50px" border="0"/></a> 
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                    <li class="dropdown"/>
                    <li>
                    
                        <ul class="dropdown-menu">
                            <li><a href="#Tech">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                        </ul>
                    </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> About us</a></li>
                    <li><a href="Signup.html"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
{/*                     <!-- <button class="notification" data-toggle="dropdown" href="#">Notifications <span class="caret"><span class="badge">3</span></span></button>-->*/}                    </ul> 
                </div>
                </div>
      </nav>
        </div>
    )
};
export default Home; 