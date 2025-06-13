import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({ email: "", pass: "" });
  const { setEmail } = useContext(AppContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/login", {
        email: user.email.trim(),
        pass: user.pass.trim(),
      });

      if (res.data) {
        setEmail(user.email);
        navigate("/");
      } else {
        setError("User not found. Please register.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <label>Email Id:</label>
        <input
          type="text"
          placeholder="Enter Email Id"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
          value={user.pass}
        />

        <button type="submit" className="login-btn">
          Log In
        </button>

        <div className="register-link">
          <Link to="/register">Don't have an account? Create now...</Link>
        </div>
      </form>
    </div>
  );
}
