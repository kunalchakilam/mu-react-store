import React, { useContext } from "react";
import { AppContext } from "./App";
import "./Cart.css";
import { Navigate } from "react-router-dom";

export default function Cart() {
  const Navigate = useNavigate();
  const { cart, setCart, email } = useContext(AppContext);

  const incrementQty = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].qty += 1;
    setCart(updatedCart);
  };

  const decrementQty = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].qty > 1) {
      updatedCart[index].qty -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleLogin = () =>{
    Navigate("/login")
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imgUrl} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <p>Price: ₹ {item.price}</p>
                <div className="quantity-control">
                  <button onClick={() => decrementQty(index)}>-</button>
                  <span style={{ margin: "0 10px" }}>{item.qty}</span>
                  <button onClick={() => incrementQty(index)}>+</button>
                </div>
              </div>
            </div>
          ))}
          <h3>Order Total: ₹ {totalPrice}</h3>
          <div className="cart-actions">
            {email ? <button className="order-btn">Place Order</button> : <button className="login-btn" onClick={handleLogin}>Login to Order</button> }
          </div>
        </div>
      )}
    </div>
  );
}
