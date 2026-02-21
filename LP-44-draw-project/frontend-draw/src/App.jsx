import { useState } from "react";
import "./App.css";
import Whiteboard from "./components/Whiteboard";
import * as fabric from "fabric";

function App() {
  const [canvas, setCanvas] = useState(null);

  const addRect = () => {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "green",
      width: 20,
      height: 20,
      stroke: "red",
      strokeWidth: 2,
    });
    canvas.add(rect);
  };

  const addCircle = () => {
    const circle = new fabric.Circle({
      left: 100,
      top: 100,
      fill: "",
      radius: 10,
      stroke: "red",
      strokeWidth: 2,
    });
    canvas.add(circle);
  };

  const removeSelected = () => {
    const activeDraw = canvas.getActiveObject();
    if (activeDraw) {
      canvas.remove(activeDraw);
    }
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            addRect();
          }}
        >
          Rec
        </button>
        <button
          onClick={() => {
            addCircle();
          }}
        >
          Circle
        </button>
        <button
          onClick={() => {
            removeSelected();
          }}
        >
          X
        </button>
      </div>
      <Whiteboard setCanvas={setCanvas} />
    </>
  );
}

export default App;
