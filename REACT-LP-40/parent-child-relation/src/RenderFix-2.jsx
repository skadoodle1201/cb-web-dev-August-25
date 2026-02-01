import { memo, useState } from "react";

//Memo Re-Render only when prop changes

const GrandChildComponent = memo(() => {
  console.log("I am Grandchild component");
  return (
    <>
      <h2>Hey From GrandChild </h2>
    </>
  );
});

const ChildComponent = memo(({ data }) => {
  console.log("I am child component", data);
  return (
    <>
      <h1>Hey From Child message : {data}</h1>
      <GrandChildComponent />
    </>
  );
});

const ParentComponent = () => {
  const [cnt, setCnt] = useState(0);
  const [msg1, setMsg1] = useState("Hello");
  const [msg2, setMsg2] = useState("Good Morning");

  console.log("I am parent component");
  return (
    <>
      <label>Message 1 : </label>
      <input
        onChange={(ev) => {
          setMsg1(ev.target.value);
        }}
      />
      <br />
      <label>Message 2 : </label>
      <input
        onChange={(ev) => {
          setMsg2(ev.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        {" "}
        + Count{" "}
      </button>{" "}
      <ChildComponent data={cnt} />
      <ChildComponent data={msg1} />
      <ChildComponent data={msg2} />
    </>
  );
};

function RenderFix2() {
  return (
    <>
      <ParentComponent />
    </>
  );
}

export default RenderFix2;
