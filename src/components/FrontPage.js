import React from "react";
import { useNavigate } from "react-router-dom";
import "./FrontPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/apps");
  };

  return (
    <div className="front-page-container">
      <div className="login">
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="signin-text form-child">Sign in</div>
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
          <button type="submit" className="login-submit-button">
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
