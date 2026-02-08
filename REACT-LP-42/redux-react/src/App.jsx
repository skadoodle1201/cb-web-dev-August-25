import { createStore } from "redux";
import "./App.css";
import counterReducers from "./counterReducers";
import { Provider } from "react-redux";
import Counter from "./Counter";

const store = createStore(counterReducers);

function App() {
  return (
    <Provider store={store}>
      <>
        <Counter />
      </>
    </Provider>
  );
}

export default App;

export { store };
