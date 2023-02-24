import React from "react";
import "./FrontPage.css";

const LoginPage = () => {
  return (
    <div className="front-page-container">
      <div className="login">
        <form className="login-form">
          <div className="signin-text form-child">Sign in</div>
          <div className="new-to-astral form-child">
            New to astral? <span className="blue-text">Sign up Here</span>
          </div>
          <input
            type="text"
            placeholder="Email"
            className="input input-email"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-password"
          />
          <div>
            <span className="blue-text">Forgot Password?</span>
          </div>
          <button type="submit" className="submit-button">
            Sign in
          </button>
        </form>
      </div>
      <div className="bg-image-container">
        <div className="bg-image"></div>
      </div>
    </div>
  );
};

export default LoginPage;
