import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStyles.css'; 
const Login_1 = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password
    };

    fetch('http://localhost:3031/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        handleLogin(result);
        navigate('/profile');
      } else {
        setError(result.error);
        handleLogin(null);
        alert(result.error);
        navigate('/login');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div id="Container">
      <form className="form" onSubmit={handleSubmit}>
        <div id="login-lable">Login</div>
        <input
          className="form-content"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-content"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div id="rays">
        {/* SVG for rays */}
      </div>

      <div id="emiter">
        {/* SVG for emitter */}
      </div>
    </div>
  );
};

export default Login_1;
