import React from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Blindates</h1>
      <nav>
      <NavLink className="navlink" to="/">Home</NavLink>
      <NavLink className="navlink" to="/users">Explore</NavLink>
      </nav>
    </header>
  );
};

export default Header;
