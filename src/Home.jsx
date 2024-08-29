import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.custom);

  const addBtn = (title, index) => {
    dispatch({
      type: "addToCart",
      payload: {
        title: title,
        index: index,
      },
    });
  };
  const subBtn = (title, index) => {
    dispatch({
      type: "removeFromCart",
      payload: {
        title: title,
        index: index,
      },
    });
  };
  const dataArr = [{ title: "Shirt" }, { title: "T-Shirt" }];
  return (
    <div>
      <h2>Cart Items:</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} (Index: {item.index})
          </li>
        ))}
      </ul>
      {dataArr.map((item, index) => (
        <div key={index}>
          <a>{item.title}</a>
          <button onClick={() => addBtn(item.title, index)}>Add</button>
          <button onClick={() => subBtn(item.title, index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;
