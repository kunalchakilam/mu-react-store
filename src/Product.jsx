import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Product() {
    const [ count, setCount ] = useState(0);
    const fetchProducts = () => {
        alert("Hello World");
    };
    useEffect(()=>{
        fetchProducts();
        return () =>{
            alert("Unmounted");
        };
    },[count])
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
    </div>
  )
}
