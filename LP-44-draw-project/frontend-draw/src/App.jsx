import { useState } from "react";
import "./App.css";
import Whiteboard from "./components/Whiteboard";
import Toolbar from "./components/Toolbar";

function App() {
  const [canvas, setCanvas] = useState(null);

  return (
    <>
      <Toolbar canvas={canvas} />
      <Whiteboard setCanvas={setCanvas} />
    </>
  );
}

export default App;
