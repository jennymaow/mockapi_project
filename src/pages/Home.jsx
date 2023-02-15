import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate= useNavigate();
  return <div className="home">
  <h1>Welcome</h1>
  <h2>It's time to find your SoulMate</h2>
  <button onClick={()=> navigate("/users") }><h3>Start</h3></button>
  </div>;
};

export default Home;
