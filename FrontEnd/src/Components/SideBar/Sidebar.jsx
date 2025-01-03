import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import "./SideBar.css";

const Sidebar = ({ open, toggleSidebar }) => {
  const handleLinkClick = () => {
    toggleSidebar();
  };

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <IoMdClose />
      </button>
      <div className="sidebar-links">
        <NavLink
          to="/"
          className="nav-links"
          activeClassName="active"
          onClick={handleLinkClick}
        >
          <h4 className="names">Home</h4>
        </NavLink>
        <NavLink
          to="/about"
          className="nav-links"
          activeClassName="active"
          onClick={handleLinkClick}
        >
          <h4 className="names">About</h4>
        </NavLink>

        <NavLink
          to="/fleets"
          className="nav-links"
          activeClassName="active"
          onClick={handleLinkClick}
        >
          <h4 className="names side-service">Fleets</h4>
        </NavLink>
        <NavLink
          to="/blogs"
          className="nav-links"
          activeClassName="active"
          onClick={handleLinkClick}
        >
          <h4 className="names">Blogs</h4>
        </NavLink>
        <NavLink
          to="/weather"
          className="nav-links"
          activeClassName="active"
          onClick={handleLinkClick}
        >
          <h4 className="names">Weather</h4>
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-links"
          activeClassName="active"
          onClick={handleLinkClick}
        >
          <h4 className="names">Contact</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
