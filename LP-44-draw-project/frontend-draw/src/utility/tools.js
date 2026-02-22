export const addRect = (fabric, { strokeWidth, strokeColor, fill = "" }) => {
  const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: fill,
    width: 20,
    height: 20,
    stroke: strokeColor,
    strokeWidth: strokeWidth,
  });
  return rect;
};

export const addCircle = (fabric, { strokeWidth, strokeColor, fill = "" }) => {
  const circle = new fabric.Circle({
    left: 100,
    top: 100,
    fill: fill,
    radius: 10,
    stroke: strokeColor,
    strokeWidth: strokeWidth,
  });
  return circle;
};

export const removeSelected = (canvas) => {
  const activeDraws = canvas.getActiveObjects();
  activeDraws.forEach((element) => {
    canvas.remove(element);
  });
};
