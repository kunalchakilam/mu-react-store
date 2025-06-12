import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({ email: "", pass: "" });
  const { users, setEmail } = useContext(AppContext);
  const [error, setError] = useState();
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  const res = await axios.get("http://localhost:8080/users");
  const usersFromBackend = res.data;

  const matchedUser = usersFromBackend.find(
    (u) => u.email === user.email && u.pass === user.pass
  );

  if (matchedUser) {
    setEmail(user.email);
    navigate("/");
  } else {
    setError("User not found. Please register now.");
  }
};

  return (
    <div className="login-container">
      <form className="login-box">
        <h2>Login</h2>

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <label>Email Id:</label>
        <input
          type="text"
          placeholder="Enter Email Id"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />

        <button type="submit" className="login-btn" onClick={handleLogin}>
          Log In
        </button>

        <div className="register-link">
          <Link to="/register">Don't have an account? Create now...</Link>
        </div>
      </form>
    </div>
  );
}
