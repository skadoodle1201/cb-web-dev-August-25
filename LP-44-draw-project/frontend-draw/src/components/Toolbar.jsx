import React from "react";
import * as fabric from "fabric";
import {
  addCircle,
  addRect,
  addText,
  disableFreeHand,
  enableFreehand,
  removeSelected,
  resetCanavs,
  saveToLocal,
} from "../utility/tools";
import { useDispatch, useSelector } from "react-redux";
import { setStrokeWidth } from "../redux/strokes.slice";
import { setStrokeColor } from "../redux/color.slice";
import Button from "./Button";

const Toolbar = ({ canvas }) => {
  const strokeWidth = useSelector((state) => state.strokes.value);
  const color = useSelector((state) => state.colors.value);
  const dispatch = useDispatch();

  return (
    <div className="toolbar">
      <div className="toolbar-controls">
        <Button
          buttonStyles={"toolbar-btn"}
          onClickFn={() =>
            addRect(fabric, canvas, {
              strokeWidth,
              strokeColor: color,
              fill: color,
            })
          }
          buttonCTA={"🔳"}
        />
        <Button
          buttonStyles={"toolbar-btn"}
          onClickFn={() => {
            addCircle(fabric, canvas, {
              strokeWidth,
              strokeColor: color,
            });
          }}
          buttonCTA={"⭕"}
        />
        <Button
          buttonStyles={"toolbar-btn"}
          onClickFn={() => {
            removeSelected(canvas);
          }}
          buttonCTA={"⌫"}
        />

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

        <Button
          buttonStyles={"toolbar-btn toolbar-btn-text"}
          onClickFn={() => {
            addText(fabric, canvas, { fill: color });
          }}
          buttonCTA={"💬"}
        />

        <Button
          buttonStyles={"toolbar-btn"}
          onClickFn={() => {
            enableFreehand(canvas);
          }}
          buttonCTA={"✍️"}
        />

        <Button
          buttonStyles={"toolbar-btn"}
          onClickFn={() => {
            disableFreeHand(canvas);
          }}
          buttonCTA={"⊹"}
        />

        <Button
          buttonStyles={"toolbar-btn"}
          onClickFn={() => {
            saveToLocal(canvas);
          }}
          buttonCTA={"💾"}
        />

        <Button
          buttonStyles={"toolbar-btn"}
          onClickFn={() => resetCanavs(canvas)}
          buttonCTA={"RESET"}
        />
      </div>
    </div>
  );
};

export default Toolbar;
