import React from "react";
import * as fabric from "fabric";
import { addCircle, addRect, removeSelected } from "../utility/tools";
import { useDispatch, useSelector } from "react-redux";
import { setStrokeWidth } from "../redux/strokes.slice";
import { setStrokeColor } from "../redux/color.slice";

const Toolbar = ({ canvas }) => {
  const strokeWidth = useSelector((state) => state.strokes.value);
  const color = useSelector((state) => state.colors.value);
  const dispatch = useDispatch();

  return (
    <div className="toolbar">
      <div className="toolbar-controls">
        <button
          className="toolbar-btn"
          onClick={() => {
            if (!canvas) return;
            canvas.clear();
          }}
        >
          RESET
        </button>
        <button
          className="toolbar-btn"
          onClick={() => {
            if (!canvas) return;
            const rect = addRect(fabric, {
              strokeWidth,
              strokeColor: color,
            });
            canvas.add(rect);
          }}
        >
          Rec
        </button>
        <button
          className="toolbar-btn"
          onClick={() => {
            if (!canvas) return;
            const circle = addCircle(fabric, {
              strokeWidth,
              strokeColor: color,
            });
            canvas.add(circle);
          }}
        >
          Circle
        </button>
        <button
          className="toolbar-btn toolbar-btn-danger"
          onClick={() => {
            if (!canvas) return;
            removeSelected(canvas);
          }}
        >
          X
        </button>
        <span className="toolbar-group">
          <label htmlFor="stroke-width">Stroke</label>
          <input
            id="stroke-width"
            className="toolbar-range"
            type="range"
            min="2"
            max="10"
            value={strokeWidth}
            onChange={(e) => {
              dispatch(setStrokeWidth(e.target.value));
            }}
          />
          <span className="toolbar-value">{strokeWidth}</span>
        </span>
        <span className="toolbar-group">
          <label htmlFor="stroke-color">Color</label>
          <input
            id="stroke-color"
            className="toolbar-color"
            type="color"
            onChange={(e) => {
              dispatch(setStrokeColor(e.target.value));
            }}
            value={color}
          ></input>
        </span>
        <button
          className="toolbar-btn toolbar-btn-text"
          onClick={() => {
            if (!canvas) return;
            const myText = new fabric.Textbox("Add Text", {
              left: 100,
              top: 100,
              fill: color,
            });

            myText.enterEditing();
            myText.selectAll();
            canvas.add(myText);
            canvas.setActiveObject(myText);
          }}
        >
          Add Text
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
