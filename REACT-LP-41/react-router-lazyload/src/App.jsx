import { lazy, Suspense } from "react";

import "./App.css";
const PageRouter = lazy(() => import("./components/PageRouter"));
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div> Loading Your Application.......</div>}>
        <PageRouter />
      </Suspense>
    </>
  );
}

export default App;
