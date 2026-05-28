import React from "react";

import "../styles/sidebar.css";

import {
  Link,
  useNavigate,
} from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  // LOGOUT FUNCTION

  const handleLogout = () => {

    // TOKEN REMOVE

    localStorage.removeItem("token");

    // LOGIN PAGE REDIRECT

    navigate("/login");

  };

  return (

    <div className="sidebar">

      {/* LOGO */}

      <div className="sidebar-logo">
        <h2>
          Admin <br /> CMS
        </h2>
      </div>

      {/* MENU */}

      <ul className="sidebar-menu">

        <li className="active">
          <Link to="/">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/hero">
            Hero Section
          </Link>
        </li>

        <li>
          <Link to="/features">
            Features CMS
          </Link>
        </li>
        <li>
          <Link to="/admin/neab">
            Neab Section
          </Link>
        </li>
        <li>
          <Link to="/achievement">
            Achievement CMS
          </Link>
        </li>

        <li>
          <Link to="/admin/service">
            Services
          </Link>
        </li>

        <li>
          <Link to="/admin/progress">
            Progress
          </Link>
        </li>

        <li>
          <Link to="/testimonial">
            Testimonial
          </Link>
        </li>

        <li>
          <Link to="/about">
            About CMS
          </Link>
        </li>

        <li>
          <Link to="/admin/project">
            Project CMS
          </Link>
        </li>

        <li>
          <Link to="/messages">
            Messages
          </Link>
        </li>

        {/* LOGOUT */}

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </ul>

    </div>

  );
};

export default Sidebar;