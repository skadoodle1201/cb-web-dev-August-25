import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  const navBarCSS = {
    display: "flex",
    justifyContent: "space-evenly",
  };
  return (
    <div style={navBarCSS}>
      {/**
       * NavLink adds a active class to active link
       */}
      <NavLink className="link-css" to="/">
        Home
      </NavLink>
      <NavLink className="link-css" to="/about">
        About Us
      </NavLink>
      <NavLink className="link-css" to="/contact">
        Contact Us
      </NavLink>
    </div>
  );
};

export default NavBar;
