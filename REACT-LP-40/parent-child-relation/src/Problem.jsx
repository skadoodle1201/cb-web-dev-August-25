import { useState } from "react";

//Problem
//Cnt is use by child1 but setState re renders the whole tree.

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

const ChildComponent1 = ({ cnt }) => {
  console.log("I am child 1");
  return (
    <>
      <h1>Hey From Child 1 this is the count : {cnt}</h1>
      <GrandChildComponent1 />
    </>
  );
};

const ParentComponent = () => {
  const [cnt, setCnt] = useState(0);

  console.log("I am parent component");
  return (
    <>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        + Count{" "}
      </button>{" "}
      <ChildComponent1 cnt={cnt} />
      <ChildComponent2 />
    </>
  );
};

function Problem() {
  return (
    <>
      <ParentComponent />
    </>
  );
}

export default Problem;
