import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.isLoggedReducer);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {!isLogged ? <h3>Secret info</h3> : null}
    </div>
  );
}

export default App;
