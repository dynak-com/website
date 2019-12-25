import React from "react";
import StyledNavLink, { StyledNavbar } from "./navbar.styles";

const Navbar = () => {
  return (
    <StyledNavbar className="navbar navbar-expand-lg navbar-dark">
      <StyledNavLink to="/">
        <h1 className="navbar-brand">
          dynak<span>.</span>com
        </h1>
      </StyledNavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <StyledNavLink exact to="/">
              <span className="nav-link d-inline-block d-lg-block px-1 my-1 my-lg-0 mx-lg-3">
                home
              </span>
            </StyledNavLink>
          </li>
          <li className="nav-item">
            <StyledNavLink exact to="/about">
              <span className="nav-link d-inline-block d-lg-block px-1 my-1 my-lg-0 mx-lg-3">
                o nas
              </span>
            </StyledNavLink>
          </li>
          <li className="nav-item">
            <StyledNavLink exact to="/projects">
              <span className="nav-link d-inline-block d-lg-block px-1 my-1 my-lg-0 mx-lg-3">
                projekty
              </span>
            </StyledNavLink>
          </li>
          <li className="nav-item">
            <StyledNavLink exact to="/contact">
              <span className="nav-link d-inline-block d-lg-block px-1 my-1 my-lg-0 mx-lg-3">
                kontakt
              </span>
            </StyledNavLink>
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
