import React, { useContext } from "react";
import { AppContext } from "./App";
import "./Cart.css";

export default function Cart() {
  const { cart } = useContext(AppContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.imgUrl} alt={item.name} width="80" />
                <div>
                  <h3>{item.name}</h3>
                  <p>₹ {item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ₹ {total}</h3>
        </>
      )}
    </div>
  );
}
