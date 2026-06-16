import React, { useState } from "react";

import "../styles/navbar.css";

import {
  Link,
  useLocation,
} from "react-router-dom";

/* LOGO */

import logo from "../assets/images/cmpLgo.png";

const Navbar = () => {

  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const [openPopup, setOpenPopup] = useState(false);

  /* FORM STATE */

  const [formData, setFormData] = useState({

    name: "",
    phone: "",
    service: "",

  });

  /* SUCCESS */

  const [successMsg, setSuccessMsg] = useState("");

  /* INPUT CHANGE */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  /* SUBMIT */

  const handleSubmit = (e) => {

    e.preventDefault();

    setSuccessMsg("Form Submitted Successfully!");

    setFormData({

      name: "",
      phone: "",
      service: "",

    });

    setTimeout(() => {

      setSuccessMsg("");

      setOpenPopup(false);

    }, 2000);

  };

  return (

    <>

      {/* NAVBAR */}

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

            <li
              className={
                location.pathname === "/"
                  ? "active-link"
                  : ""
              }
            >

              <Link to="/">
                Home
              </Link>

            </li>

            <li
              className={
                location.pathname === "/about"
                  ? "active-link"
                  : ""
              }
            >

              <Link to="/about">
                About Us
              </Link>

            </li>

            <li
              className={
                location.pathname === "/project"
                  ? "active-link"
                  : ""
              }
            >

              <Link to="/project">
                Project showcase
              </Link>

            </li>

            <li
              className={
                location.pathname === "/contact"
                  ? "active-link"
                  : ""
              }
            >

              <Link to="/contact">
                Contact Us
              </Link>

            </li>

            <li
              className={
                location.pathname === "/testpage"
                  ? "active-link"
                  : ""
              }
            >

              <Link to="/testpage">
                Test Page
              </Link>

            </li>

          </ul>

          {/* RIGHT */}

          <div className="nav-right">

            <button
              className="nav-connect-btn"
              onClick={() => setOpenPopup(true)}
            >
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
{menuOpen && (
  <div
    className="mobile-overlay show-overlay"
    onClick={() => setMenuOpen(false)}
  />
)}
      {/* MOBILE MENU */}
<div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>

  {/* CLOSE BUTTON */}

  <button
    className="mobile-close-btn"
    onClick={() => setMenuOpen(false)}
  >
    ✕
  </button>

  {/* LOGO */}

  <div className="mobile-logo">

    <img
      src={logo}
      alt=""
      className="mobile-logo-img"
    />

  </div>

  {/* MENU */}

  <ul className="mobile-nav-links">

    <li>

      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </Link>

    </li>

    <li>

      <Link
        to="/about"
        onClick={() => setMenuOpen(false)}
      >
        About Us
      </Link>

    </li>

    <li>

      <Link
        to="/project"
        onClick={() => setMenuOpen(false)}
      >
        Project Showcase
      </Link>

    </li>

    <li>

      <Link
        to="/contact"
        onClick={() => setMenuOpen(false)}
      >
        Contact Us
      </Link>

    </li>

    <li>

      <Link
        to="/testpage"
        onClick={() => setMenuOpen(false)}
      >
        Test Page
      </Link>

    </li>

  </ul>

</div>
      {/* POPUP */}

      {openPopup && (

        <div className="popup-overlay">

          <div className="popup-form-box">

            {/* CLOSE */}

            <button
              className="popup-close-btn"
              onClick={() => setOpenPopup(false)}
            >
              ×
            </button>

            <h2>

              Lets Create Your Dream Design
              <br />
              Together

            </h2>

            <p>

              To help us serve you better,
              please share your name,
              contact number,
              and service choice.

            </p>

            {/* FORM */}

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Your Contact No."
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Service
                </option>

                <option>
                  Website Design
                </option>

                <option>
                  App Development
                </option>

                <option>
                  SEO
                </option>

                <option>
                  Marketing
                </option>

              </select>

              <button type="submit">
                SUBMIT
              </button>

              {/* SUCCESS */}

              {successMsg && (

                <div className="success-msg">

                  {successMsg}

                </div>

              )}

            </form>

          </div>

        </div>

      )}

    </>

  );

};

export default Navbar;