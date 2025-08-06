import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Your Logo</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? "nav-link text-danger fw-bold" : "nav-link"
    }
  >
    About
  </NavLink>
</li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/contact/email">Email</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/contact/phone">Phone</NavLink>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex align-items-center gap-2" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            <NavLink 
            to="/login"
             className={({ isActive }) =>
      isActive ? "btn btn-outline-danger fw-bold" : "btn btn-outline-success" 
        }
        >
              Login
            </NavLink>
            <NavLink to="/signup" className={({isActive})=>
            isActive?"btn btn-outline-danger fw-bold ":"btn btn-outline success"}>
              Sign Up
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
