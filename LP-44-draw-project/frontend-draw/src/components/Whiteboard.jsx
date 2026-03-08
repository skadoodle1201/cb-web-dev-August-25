import { useCallback, useEffect, useRef } from "react";
import * as fabric from "fabric";
import { useSelector } from "react-redux";
import { socket } from "../socket";

const Whiteboard = ({ setCanvas, isApplyingRemote }) => {
  const canvasEl = useRef(null);
  const fabricRef = useRef(null);

  const strokeWidth = useSelector((state) => state.strokes.value);
  const strokeColor = useSelector((state) => state.colors.value);

  const roomId = useSelector((state) => state.room.value);

  const canvasModifiedCallback = useCallback(() => {
    const currentCanvas = fabricRef.current;
    if (!roomId || !currentCanvas || isApplyingRemote.current) {
      return;
    }

    socket.emit("canvas_change", {
      roomId,
      canvas: currentCanvas.toJSON(),
    });
  }, [roomId, isApplyingRemote]);

  useEffect(() => {
    const currentCanvas = fabricRef.current;
    if (!roomId || !currentCanvas) {
      return;
    }

    currentCanvas.on("object:added", canvasModifiedCallback);
    currentCanvas.on("object:removed", canvasModifiedCallback);
    currentCanvas.on("object:modified", canvasModifiedCallback);
    currentCanvas.on("text:changed", canvasModifiedCallback);
    currentCanvas.on("path:created", canvasModifiedCallback);

    return () => {
      // currentCanvas.off("object:added", canvasModifiedCallback);
      // currentCanvas.off("object:removed", canvasModifiedCallback);
      // currentCanvas.off("object:modified", canvasModifiedCallback);
      // currentCanvas.off("text:changed", canvasModifiedCallback);
      // currentCanvas.off("path:created", canvasModifiedCallback);
    };
  }, [roomId, canvasModifiedCallback]);

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
    const currentCanvas = fabricRef.current;
    if (!currentCanvas?.freeDrawingBrush) {
      return;
    }

    currentCanvas.freeDrawingBrush.color = strokeColor;
    currentCanvas.freeDrawingBrush.width = strokeWidth;
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
