import React from "react";
import { Link } from "react-router-dom";
import "./css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light NavBarCustom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://i.imgur.com/VdpY14p.png"
            alt="logo"
            className="img-fluid nav-logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/allproducts">
                Products
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Create Account
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
