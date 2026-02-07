import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { Link, Route, Routes } from "react-router";

function App() {
  const navBarCSS = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  const linkCSS = {
    textDecoration: "none",
  };

  return (
    <>
      <div style={navBarCSS}>
        <Link style={linkCSS} to="/">
          Home
        </Link>
        <Link style={linkCSS} to="/about">
          About Us
        </Link>
        <Link style={linkCSS} to="/contact">
          Contact Us
        </Link>
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
