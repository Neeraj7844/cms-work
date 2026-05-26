import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">

      <h2>Dashboard</h2>

      <div className="admin-profile">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="admin"
        />
      </div>

    </div>
  );
};

export default Navbar;