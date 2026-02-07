import { useState } from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const updatePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      {/* {      <a href="/home">Home</a>
      <a href="/about">About us</a>
      <a href="/contact">Contact us</a>} */}

      <div>
        <button onClick={() => updatePage("home")}>Home</button>
        <button onClick={() => updatePage("about")}>About Us</button>
        <button onClick={() => updatePage("contact")}>Contact Us</button>
      </div>

      {currentPage == "home" && <Home />}
      {currentPage == "about" && <AboutUs />}
      {currentPage == "contact" && <ContactUs />}
    </>
  );
}

export default App;
