import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import RenderFix2 from "./RenderFix-2.jsx";
import Problem from "./Problem.jsx";
import RenderFix1 from "./RenderFix-1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Problem /> */}
    {/* <RenderFix1 /> */}
    <RenderFix2 />
  </StrictMode>,
);
