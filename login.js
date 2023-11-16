import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './index.css'; // Import the index.css file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault();
    
    //authentication here

    //if authentication is successful, navigate to the dashboard
    // after checking email and password:
    if (email === 'user@example.com' && password === 'password') {
      navigate('/dashboard'); //navigate to the '/dashboard' route
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to PlanPal</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input" 
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input" 
            />
          </div>
          <div>
            <button type="submit" className="login-button">Login</button> {}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
