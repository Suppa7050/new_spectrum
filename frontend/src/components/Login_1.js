import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login_1({ handleLogin }) {
  const styleObj = {
    fontSize: 20,
    color: "gold",
  };

  const styleObjq = {
    fontSize: 20,
    color: "black",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the username and password
    const data = {
      username: username,
      password: password
    };

    // Send a POST request to the backend
    fetch('http://localhost:3031/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      // Handle the response from the backend
      console.log(result);
      if(result.success){
        handleLogin(result);
        navigate('/profile');
      }
      else{
        // setError(result.error);
        setError(result.error);
        handleLogin(null);
        alert(result.error);
        navigate('/login');
      }
      // Add your logic here based on the response
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
  };

  return (
    <div style={{ padding: '10%' }}>
      
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <label htmlFor="username" style={styleObj}>Username:</label><br/>
        <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} /><br/><br/>
        <label htmlFor="password" style={styleObj}>Password:</label><br/>
        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} /><br/><br/>
        <input type="submit" value="Submit" style={styleObjq}/>
      </form> 
      <br/><br/>
      {/* {error && window.alert(
        error) navigate('/login')} */}
    </div>
  );
};

export default Login_1;
