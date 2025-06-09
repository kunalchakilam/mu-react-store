import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [user, setUser] = useState({});
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);

  const handleClick = () => {
    alert("Hello World");
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const handleAddNumbers = () => {
    // Parse the inputs to numbers (default to 0 if empty)
    const number1 = parseFloat(num1) || 0;
    const number2 = parseFloat(num2) || 0;
    setSum(number1 + number2);
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
        <button>Submit</button>
        <Link to="/login">Already a member? Login here..</Link>

        {/* <button onClick={handleClick}>Click</button>
        <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={decrementCount}>-</button>
          <span>{count}</span>
          <button onClick={incrementCount}>+</button>
        </p>

        <p>
          <input
            type="number"
            placeholder="Enter a Number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter a Number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </p>

        <button onClick={handleAddNumbers}>Add Numbers</button>

        {sum !== null && (
          <p>
            <strong>Result: </strong> {sum}
          </p>
        )} */}
      </div>
    </div>
  );
}
