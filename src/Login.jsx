import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <label>Email Id:</label>
        <input type="text" placeholder="Enter Email Id" />

        <label>Password:</label>
        <input type="password" placeholder="Enter Password" />

        <button className="login-btn">Log In</button>

        <div className="register-link">
          <Link to="/register">
            Don't have an account? Create now...
          </Link>
        </div>
      </div>
    </div>
  );
}
