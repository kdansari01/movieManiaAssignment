import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink
            style={{ textDecoration: "none" }}
            to="/"
            className="text-white fs-1 fw-bold nav-link"
          >
            Movie Mania
          </NavLink>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Movies"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
