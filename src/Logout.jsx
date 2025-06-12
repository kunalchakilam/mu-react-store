import React, { useEffect, useContext } from "react";
import { AppContext } from "./App";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { setEmail } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setEmail(null);
    navigate("/login");
  }, []);

  return <div>Logging out...</div>; 
}
