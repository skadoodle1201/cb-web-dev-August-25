import BasicCounterApp from "./components/basicCounter";
import AdvanceCounterApp from "./components/advanceCounter";

function App() {
  return (
    <>
      <h2>Basic Counter: </h2>
      <BasicCounterApp />

      <hr />

      <h2>Advance Counter: </h2>
      <AdvanceCounterApp />
    </>
  );
}

export default App;
