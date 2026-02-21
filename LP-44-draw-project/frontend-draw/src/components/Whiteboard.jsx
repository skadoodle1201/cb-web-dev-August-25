import { useEffect, useRef } from "react";
import * as fabric from "fabric";

const Whiteboard = ({ setCanvas }) => {
  const canvasEl = useRef(null);
  const fabricRef = useRef(null);

  const enableFreehand = () => {
    fabricRef.current.isDrawingMode = true;
  };

  const disableFreeHand = () => {
    fabricRef.current.isDrawingMode = false;
  };

  useEffect(() => {
    const options = { width: 1000, height: 600 };
    const fabricCanvas = new fabric.Canvas(canvasEl.current, options);
    fabricCanvas.freeDrawingBrush = new fabric.PencilBrush(fabricCanvas);
    fabricCanvas.freeDrawingBrush.color = "black";
    fabricCanvas.freeDrawingBrush.width = 4;

    fabricRef.current = fabricCanvas;

    setCanvas(fabricCanvas);

    return () => {
      fabricCanvas.dispose();
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          enableFreehand();
        }}
      >
        FreeHand
      </button>
      <button
        onClick={() => {
          disableFreeHand();
        }}
      >
        Select
      </button>
      <canvas ref={canvasEl} />
    </>
  );
};

export default Whiteboard;
