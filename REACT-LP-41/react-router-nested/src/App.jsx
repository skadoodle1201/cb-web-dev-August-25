import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Team from "./components/Team";
import Centers from "./components/Centers";

import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import TeamCard from "./components/TeamCard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />}>
          <Route path="team" element={<Team />}>
            <Route path=":pid" element={<TeamCard />}></Route>
          </Route>
          <Route path="center" element={<Centers />}></Route>
        </Route>
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
