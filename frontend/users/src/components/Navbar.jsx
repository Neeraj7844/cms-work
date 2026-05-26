import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";


// LOGO IMPORT
import logo from "../assets/images/cmpLgo.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <div className="nav-container">

          {/* LOGO */}
          <div className="logo">

            <img
              src={logo}
              alt="Design U Crave"
              className="logo-img"
            />

          </div>

          {/* MENU */}
          <ul className="nav-menu">

            <li className="active-link">
              <Link to="/">Home</Link>
              
            </li>

            <li>
           <Link to="/about">About Us</Link>
          </li>

            <li>
            <Link to="/project">
            Project showcase
          </Link>
              </li>

           <li>
            <Link to="/contact">
              Contact Us
            </Link>
          </li>

            <li>
              <Link to="/testpage">
               Test Page
              </Link>
             
            </li>

          </ul>

          {/* RIGHT */}
          <div className="nav-right">

            <button className="connect-btn">
              Let’s Connect
            </button>

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

          </div>

        </div>

      </nav>

      {/* =========================
          MOBILE MENU
      ========================= */}

      <div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>

        <ul>

          <li>Home</li>
          <li>About Us</li>
          <li>Project showcase</li>
          <li>Contact Us</li>
          <li>Test Page</li>

        </ul>

      </div>
    </>
  );
};

export default Navbar;