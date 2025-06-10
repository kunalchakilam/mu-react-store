import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "./App";
import "./Register.css";

export default function Register() {
  const [user, setUser] = useState({});
  const{users, setUsers} = useContext(AppContext);
  const navigate = useNavigate(); 
  const handleRegister = () => {
    setUsers([...users, user]);
    console.log(users)
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <p>
          Name:
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </p>
        <p>
          Email Id:
          <input
            type="text"
            placeholder="Enter Email Id"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </p>
        <p>
          Password:
          <input
            type="password"
            placeholder="New Password"
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
          />
        </p>
        <button onClick={handleRegister}>Register</button>
        <Link to="/login">Already a member? Login here..</Link>
      </div>
    </div>
  );
}
