const BadWayToCallReactComponent = (message) => {
  return (
    <div>
      <h1>This is a react function or functional component</h1>
      <h3>This is message: {message}</h3>
    </div>
  );
};

const GoodWayToCallReactComponent = (props) => {
  const message = props.message;
  return (
    <div>
      <h1>
        This is a react function or functional component With Better way to call
      </h1>
      <h3>This is message: {message}</h3>
    </div>
  );
};

const ReactBasic = () => {
  return (
    <>
      {BadWayToCallReactComponent("Hey From Tanish")}
      <GoodWayToCallReactComponent message="Hey From Tanish" />
    </>
  );
};
export default ReactBasic;
