import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/styles.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar-nav">
        <ul className="navbar">
          <div className="">
            <img
              src="./assets/images/Logo.png"
              alt="logo"
              className="nav-brand"
            />
          </div>
          <li className="nav-item">
            <NavLink href="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/" className="nav-link">
              Exercises
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
