export const addRect = (
  fabric,
  canvas,
  { strokeWidth, strokeColor, fill = "" },
) => {
  if (!canvas) return;
  const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: fill,
    width: 20,
    height: 20,
    stroke: strokeColor,
    strokeWidth: strokeWidth,
  });
  canvas.add(rect);
};

export const addCircle = (
  fabric,
  canvas,
  { strokeWidth, strokeColor, fill = "" },
) => {
  if (!canvas) return;
  const circle = new fabric.Circle({
    left: 100,
    top: 100,
    fill: fill,
    radius: 10,
    stroke: strokeColor,
    strokeWidth: strokeWidth,
  });
  canvas.add(circle);
};

export const removeSelected = (canvas) => {
  if (!canvas) return;
  const activeDraws = canvas.getActiveObjects();
  activeDraws.forEach((element) => {
    canvas.remove(element);
  });
};

export const resetCanavs = (canvas) => {
  if (!canvas) return;
  canvas.clear();
};

export const addText = (fabric, canvas, { fill = "" }) => {
  if (!canvas) return;
  const myText = new fabric.Textbox("Add Text", {
    left: 100,
    top: 100,
    fill,
  });

  myText.enterEditing();
  myText.selectAll();
  canvas.add(myText);
  canvas.setActiveObject(myText);
};

export const enableFreehand = (canvas) => {
  if (!canvas) return;
  canvas.isDrawingMode = true;
};

export const disableFreeHand = (canvas) => {
  if (!canvas) return;
  canvas.isDrawingMode = false;
};

export const saveToLocal = (canvas) => {
  localStorage.setItem("canvasSave", JSON.stringify(canvas.toJSON()));
};
