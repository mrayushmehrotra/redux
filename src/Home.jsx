import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { c } = useSelector((state) => state.custom);
  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };
  const add10 = () => {
    dispatch({
      type: "incrementByVal",
      payload: 10,
    });
  };
  const subBtn = () => {
    dispatch({
      type: "decrement",
    });
  };
  const value = 20;
  return (
    <div>
      <h2>{c}</h2>
      <button onClick={addBtn}>Increase</button>
      <button onClick={subBtn}>Decrease</button>
      <button onClick={add10}>Ben10</button>
    </div>
  );
}

export default App;
