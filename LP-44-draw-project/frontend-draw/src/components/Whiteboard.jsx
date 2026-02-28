import { useEffect, useRef } from "react";
import * as fabric from "fabric";
import { useSelector } from "react-redux";

const Whiteboard = ({ setCanvas }) => {
  const canvasEl = useRef(null);
  const fabricRef = useRef(null);

  const strokeWidth = useSelector((state) => state.strokes.value);
  const strokeColor = useSelector((state) => state.colors.value);

  useEffect(() => {
    const options = { width: 1000, height: 600 };
    const fabricCanvas = new fabric.Canvas(canvasEl.current, options);

    const prevCanvasJSON = localStorage.getItem("canvasSave");

    if (prevCanvasJSON) {
      fabricCanvas
        .loadFromJSON(prevCanvasJSON)
        .then((fabricCanvas) => fabricCanvas.renderAll());
    }

    fabricCanvas.freeDrawingBrush = new fabric.PencilBrush(fabricCanvas);

    fabricCanvas.freeDrawingBrush.color = "black";
    fabricCanvas.freeDrawingBrush.width = 4;

    fabricRef.current = fabricCanvas;

    setCanvas(fabricCanvas);

    return () => {
      fabricCanvas.dispose();
    };
  }, [setCanvas]);

  useEffect(() => {
    if (fabricRef) {
      fabricRef.current.freeDrawingBrush.color = strokeColor;
      fabricRef.current.freeDrawingBrush.width = strokeWidth;
    }
  }, [strokeWidth, strokeColor]);

  return (
    <div className="whiteboard-wrap">
      {/* <button
        onClick={() => {
          eraserBrush();
        }}
      >
        Erase
      </button> */}
      <div className="canvas-shell">
        <canvas key="my-canvas" ref={canvasEl} />
      </div>
    </div>
  );
};

export default Whiteboard;
