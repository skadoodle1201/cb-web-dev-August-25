import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Button2 = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <button className={themeContext ? "btn-css-dark" : "btn-css"}>
        My Button Second
      </button>
    </div>
  );
};

export default Button2;
