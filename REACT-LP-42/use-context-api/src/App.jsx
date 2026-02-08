import { createContext, useState } from "react";
import "./App.css";
import Button1 from "./components/Button1";
import Button3 from "./components/Button3";
import Button2 from "./components/Button2";

const ThemeContext = createContext(false);
const TodoContext = createContext({
  todos: [],
  updateTodos: () => {},
});
function App() {
  const [theme, setTheme] = useState(false);
  const [todos, setTodos] = useState(["Swim", "Code", "Cook"]);

  const updateTodos = (task) => {
    setTodos((prev) => [...prev, task]);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <TodoContext.Provider value={{ todos, updateTodos }}>
        <>
          <div>
            Dark
            <input
              type="checkbox"
              onChange={(e) => {
                setTheme(e.target.checked);
              }}
            />
            <Button1 />
            <Button2 />
            <Button3 />
          </div>
        </>
      </TodoContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext, TodoContext };
