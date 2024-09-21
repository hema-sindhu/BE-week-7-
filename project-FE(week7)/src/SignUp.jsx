import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Use the same CSS

const SignUp = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a signup process
    setSignUpSuccess(true);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Sign-up Form Container */}
        <div className="login-form-container">
          <h1 className="instagram-text">Instagram</h1>

          {!signUpSuccess ? (
            <>
              <p>Sign up to see photos and videos from your friends.</p>

              <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                  <input type="text" placeholder="Mobile number or email" required />
                </div>

                <div className="input-group">
                  <input type="text" placeholder="Full Name" required />
                </div>

                <div className="input-group">
                  <input type="text" placeholder="Username" required />
                </div>

                <div className="input-group">
                  <input type="password" placeholder="Password" required />
                </div>

                <button type="submit" className="login-btn">Sign Up</button>

                <p className="terms-text">
                  People who use our service may have uploaded your contact information to Instagram.{' '}
                  <a href="#">Learn More</a>
                </p>

                <p className="terms-text">
                  By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a>, and{' '}
                  <a href="#">Cookies Policy</a>.
                </p>
              </form>
            </>
          ) : (
            <div className="success-message">
              <h2>Sign up successful!</h2>
            </div>
          )}

          {/* Login Link */}
          <div className="signup-link-container">
            <p>
              Have an account? <Link to="/">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
