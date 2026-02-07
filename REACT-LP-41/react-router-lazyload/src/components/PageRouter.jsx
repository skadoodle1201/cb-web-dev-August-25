import { Route, Routes } from "react-router";
import { lazy } from "react";

const TeamCard = lazy(() => import("./TeamCard"));
const Home = lazy(() => import("./Home"));
const AboutUs = lazy(() => import("./AboutUs"));
const ContactUs = lazy(() => import("./ContactUs"));
const Team = lazy(() => import("./Team"));
const Centers = lazy(() => import("./Centers"));

const PageRouter = () => {
  return (
    <div>
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
    </div>
  );
};

export default PageRouter;
