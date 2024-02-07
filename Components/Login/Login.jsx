
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nav=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    nav('/home');
    // Check if username and password are valid (e.g., validate against database)
    if (username === 'Jaasim' && password === 'Jaas' || username === 'Arthi' && password === 'Arim_32' ) {
      //onLogin(username); // Pass the username to the parent component (e.g., App.js)
      setError(''); // Reset error message
      // Display an alert message when successfully logged in
      window.alert('Welcome to Weather App');
    } else {
      setError('Invalid username or password');
    }
  };
   const handleSignup = () =>
   {
    nav('/sign')
   };
  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button onClick={handleLogin}>Login</button>
        <br/>
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

export default Login;

