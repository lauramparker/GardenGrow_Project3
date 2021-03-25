import React from "react";
import {NavLink as RouterNavLink } from "react-router-dom"; //assuming links in header?
import "./style.css";
import {

    NavItem,
    NavLink,

  } from "reactstrap";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg container-fluid">
      <h2 style={{ fontFamily: "'Concert One', cursive", fontWeight: "400" }}>
        {" "}
        Garden Grow
      </h2>
      <div className="col-6 container-fluid">
        <ul
          className="navbar-nav"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#CEBEBA" }}
        >
          <li className="nav-item">
          <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/landing-page"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  Home
                </NavLink>
              </NavItem>
          </li>
          <li className="nav-item">
          <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/MyGardens"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  My Gardens
                </NavLink>
              </NavItem>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
