import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Button3 = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      <button className={themeContext ? "btn-css-dark" : "btn-css"}>
        My Button Third
      </button>
    </div>
  );
};

export default Button3;
