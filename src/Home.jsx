import React from "react";
import {useNavigate} from "react-router-dom";
import "./Home.css";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      desc: "This is the description of the product",
      price: 45,
      imgUrl: "https://picsum.photos/id/1/300/300",
    },
    {
      id: 2,
      name: "Product 2",
      desc: "This is the description of the product",
      price: 50,
      imgUrl: "https://picsum.photos/id/2/300/300",
    },
    {
      id: 3,
      name: "Product 3",
      desc: "This is the description of the product",
      price: 75,
      imgUrl: "https://picsum.photos/id/3/300/300",
    },
  ];
  const Navigate = useNavigate();
  const addtoCart = () => {
    Navigate("/cart")
  }
  return (
    <div className="home-content">
      <div className="App-Home-Row">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <h4>₹ {product.price}</h4>
            <button onClick={addtoCart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
