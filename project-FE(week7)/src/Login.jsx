import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import the CSS for styling

const Login = () => {
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ userName, password });

    try {
      // Send login request to the backend
      const res = await axios.post('http://localhost:3000/auth/login', { userName, password });
      if (res) {
        alert('Login successful');
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Image */}
        <div className="login-image">
          <img
            src="https://knowtechie.com/wp-content/uploads/2020/09/instagram-messenger-dms.jpg"
            alt="Instagram"
          />
        </div>

        {/* Login Form Container */}
        <div className="login-form-container">
          <h1 className="instagram-text">Instagram</h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Username or email"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">Log In</button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button type="button" className="fb-login-btn">Log in with Facebook</button>

            <a href="/forgot-password" className="forgot-password-link">Forgot password?</a>
          </form>

          {/* Signup Link */}
          <div className="signup-link-container">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
