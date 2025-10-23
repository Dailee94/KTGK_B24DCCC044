import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        📰 Blog Manager
      </Link>
      <div className="menu">
        <NavLink to="/" end>
          Trang chủ
        </NavLink>
        <NavLink to="/create">Viết bài</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
