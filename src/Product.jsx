import React from 'react'
import { useEffect } from 'react'

export default function Product() {
    const fetchProducts = () => {
        alert("Hello World");
    };
    useEffect(()=>{
        fetchProducts
    },[])
  return (
    <div>Product</div>
  )
}
