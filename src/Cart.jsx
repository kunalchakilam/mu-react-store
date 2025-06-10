import React, { useContext } from "react";
import { AppContext } from "./App";
import "./Cart.css"; 

export default function Cart() {
  const { cart } = useContext(AppContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imgUrl} alt={item.name} width="100" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <p>Price: ₹ {item.price}</p>
                <p>Quantity: {item.qty}</p>
              </div>
            </div>
          ))}
          <h3>Total: ₹ {totalPrice}</h3>
        </div>
      )}
    </div>
  );
}
