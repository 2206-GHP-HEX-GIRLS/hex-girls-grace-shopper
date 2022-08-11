import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./css/NavBar.css";
import { auth } from "./LogIn";

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
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
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
                  <Link className="dropdown-item" to="/register">
                    Create Account
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/login">
                    Log In
                  </Link>
                </li>
                <li onClick={() => auth.signOut()}>
                  <Link className="dropdown-item" to="/">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/cart">
                <ShoppingCartIcon />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
