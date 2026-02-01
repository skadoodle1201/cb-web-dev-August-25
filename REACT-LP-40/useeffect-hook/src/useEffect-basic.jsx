import { useEffect, useState } from "react";

function UseEffectBasic() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("This is printing from useEffect", count);
  }, [count]);
  //useEffect takes a callback
  // Second parameter is optional but if not passed it runs on every render.
  // If passed as a empty [] it runs on First Mount of the component
  // If passed with a value runs when the value changes.

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count +
      </button>
      {count}
    </>
  );
}

export default UseEffectBasic;
