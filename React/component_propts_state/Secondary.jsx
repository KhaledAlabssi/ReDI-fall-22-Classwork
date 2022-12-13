import { useState } from "react";
import "./App.css";

function App() {
  let todos = [];
  const [list, setList] = useState(todos);
  const submitHandler = (e) => {
    e.preventDefault();
    setList([...list, e.target.userInput.value]);
    e.target.userInput.value = "";
  };
  const deleteHandler = (e) => {
    let value = e.target.textContent;
    let result = list.filter((i) => i != value);
    setList(result);
  };
  return (
    <div>
      <form onSubmit={submitHandler} action="">
        <input type="text" name="userInput" />
        <button type="submit">Create</button>
      </form>
      {list.map((i) => (
        <p onClick={deleteHandler}>{i}</p>
      ))}
    </div>
  );
}

export default App;
