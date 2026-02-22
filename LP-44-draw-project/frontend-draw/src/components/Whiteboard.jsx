import { useEffect, useRef } from "react";
import * as fabric from "fabric";
import { useSelector } from "react-redux";

const Whiteboard = ({ setCanvas }) => {
  const canvasEl = useRef(null);
  const fabricRef = useRef(null);

  const strokeWidth = useSelector((state) => state.strokes.value);
  const strokeColor = useSelector((state) => state.colors.value);

  const enableFreehand = () => {
    if (!fabricRef.current) return;
    fabricRef.current.isDrawingMode = true;
  };

  const disableFreeHand = () => {
    if (!fabricRef.current) return;
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
  }, [setCanvas]);

  useEffect(() => {
    if (fabricRef) {
      fabricRef.current.freeDrawingBrush.color = strokeColor;
      fabricRef.current.freeDrawingBrush.width = strokeWidth;
    }
  }, [strokeWidth, strokeColor]);

  return (
    <div className="whiteboard-wrap">
      <div className="whiteboard-tools">
        <button
          className="toolbar-btn"
          onClick={() => {
            enableFreehand();
          }}
        >
          FreeHand
        </button>
        <button
          className="toolbar-btn"
          onClick={() => {
            disableFreeHand();
          }}
        >
          Select
        </button>
      </div>

      {/* <button
        onClick={() => {
          eraserBrush();
        }}
      >
        Erase
      </button> */}
      <div className="canvas-shell">
        <canvas ref={canvasEl} />
      </div>
    </div>
  );
};

export default Whiteboard;
