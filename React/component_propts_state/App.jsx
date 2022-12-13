import { useInsertionEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [writing, setWriting] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, e.target.input.value]);
    e.target.input.value = "";
    setWriting("");
  };

  const deleteHandler = (e) => {
    let value = e.target.textContent;
    let result = todos.filter((i) => i != value);
    setTodos(result);
  };
  const changeHandler = (e) => {
    setWriting(e.target.value);
  };
  return (
    <div>
      <p>{writing}</p>
      <form action="" onSubmit={submitHandler}>
        <input onChange={changeHandler} type="text" name="input" />
        <button type="submit">add</button>
      </form>
      {todos.length == 0 && <h1>Create new todos</h1>}
      <ul>
        {todos.map((i) => (
          <li onClick={deleteHandler}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
