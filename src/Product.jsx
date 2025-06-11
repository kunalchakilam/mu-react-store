import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';

export default function Product() {
    const [products, setProducts] = useState([]);

    
    const fetchProducts = async () => {
        const url = "https://gcet-node-app.vercel.app/products/all"
        const res = await axios.get(url);
        setProducts(res.data);
    };
    useEffect(()=>{
        fetchProducts();   
    },[])
  return (
    <div>
        {products.map(product=>(
            <li>{product.name}</li>
        ))}
    </div>
  )
}
