import React, { useContext, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Home = () => {
  const { users, setUsers, setLoaded } = useContext(UserContext);
  
  const navigate = useNavigate();

  const getUsers = async () => {
    const res = await fetch(
      "https://63ecf23b32a0811723a597c4.mockapi.io/blinddates/users"
    );
    const data = await res.json();
    console.log("LANZANDO PETICIÓN");
    setUsers(data);
    
    localStorage.setItem("user", JSON.stringify(data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="home">
      <h1>Welcome</h1>
      <h2>It's time to find your SoulMate</h2>
      <button onClick={() => navigate("/users")}>
        <h3>Start</h3>
      </button>
    </div>
  );
};

export default Home;
