import React, { useContext } from "react";
import { ThemeContext } from "../App";
import TaskList from "./TaskList";

const Button1 = () => {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  return (
    <div>
      <button className={themeContext ? "btn-css-dark" : "btn-css"}>
        My Button
      </button>
      <TaskList />
    </div>
  );
};

export default Button1;
