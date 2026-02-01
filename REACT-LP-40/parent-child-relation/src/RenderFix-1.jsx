import { useState } from "react";

//Moved the count state where it is being use so that the whole tree
//Is not built again

const GrandChildComponent1 = () => {
  console.log("I am grand child 1");
  return (
    <>
      <h1>Hey From GrandChild 1</h1>
    </>
  );
};

const ChildComponent2 = () => {
  console.log("I am child 2");
  return (
    <>
      <h1>Hey From Child 2</h1>
    </>
  );
};

const ChildComponent1 = () => {
  const [cnt, setCnt] = useState(0);

  console.log("I am child 1");
  return (
    <>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        {" "}
        + Count{" "}
      </button>{" "}
      <h1>Hey From Child 1 this is the count : {cnt}</h1>
      <GrandChildComponent1 />
    </>
  );
};

const ParentComponent = () => {
  console.log("I am parent component");
  return (
    <>
      <ChildComponent1 />
      <ChildComponent2 />
    </>
  );
};

function RenderFix1() {
  return (
    <>
      <ParentComponent />
    </>
  );
}

export default RenderFix1;
