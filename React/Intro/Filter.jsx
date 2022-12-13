import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let data = [
    {name : "Mike", position: 'Manager'},
    {name: "Sarah", position: 'Worker'},
    {name: "Sam", position: 'Worker'},

  ]
   const [empl, setempl] = useState(data)

  const workers =() => {
    let newData = data.filter(i => i.position == 'Worker')
    setempl(newData)
  }
  return (
    <div className="App">
      <button onClick={workers}>Workers only</button>
      
      
      {empl.map(i => <div>
      <h1>{i.name}</h1>
      <h2>{i.position}</h2>
      <hr />
      </div>
    )}
    </div>
  );
}

export default App;
