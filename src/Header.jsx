import React from "react";
import "./Header.css";
import { AppContext } from "./App";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Header({ name }) {
  const { email } = useContext(AppContext);
  return (
    <div className="App-Header-Row" style={{ backgroundColor: "gold" }}>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            {email ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
