import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { NavLink, Route, Routes } from "react-router";
import "./App.css";

function App() {
  const navBarCSS = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  return (
    <>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
