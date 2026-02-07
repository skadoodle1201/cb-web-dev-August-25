import React from "react";
import { Link, Outlet } from "react-router";

const AboutUs = () => {
  const navBarCSS = {
    display: "flex",
    justifyContent: "space-evenly",
  };
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolore
        consequuntur dolorum fugit nam, mollitia a illo amet labore. Quod
        facilis minus eius in provident, aliquid nulla quidem nam nihil.
      </p>

      <div style={navBarCSS}>
        <Link to="team">Our Team</Link>
        <Link to="center">Center</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutUs;
