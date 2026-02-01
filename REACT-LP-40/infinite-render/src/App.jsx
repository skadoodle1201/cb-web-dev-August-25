import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log("I am rerendering currently");

  setCount(count); //This causes infinte Re renders and results in Error
  return <>{count}</>;
}

export default App;
