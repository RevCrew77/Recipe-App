import React from "react";
import { Link } from "react-router-dom";
import mylogos from "../Pictures/my-recipes-logo.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="home">
        <a href="/"><img src={mylogos} alt="" /></a>
      </div>
      <div class="elements">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/about">About Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
