import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbarstyle from "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  function handleClick(e) {
    /*this function reverses the state of menu-icon when clicked*/
    e.preventDefault();
    setClick(!click);
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Discover Ireland ☘
          </Link>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/destinations" className="nav-links">
                Places
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/weather" className="nav-links">
                Irish weather
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
