import './App.css';
import { useContext, useState } from 'react';

function App() {
  const data = [
    {name: 'todo React', tech: 'react', url: 'uldsf'},
    {name: 'todo JS', tech: 'js', url: 'uldsf'},
    {name: 'cook JS', tech: 'js', url: 'uldsf'},
    {name: 'todo Fe', tech: 'frontend', url: 'uldsf'},
    {name: 'Cook React', tech: 'react', url: 'uldsf'},
  ]
  const [mode, setMode] = useState('light')
  const [projects, setProjects] = useState(data)

  const JSfilter = () => {
   let newData = data.filter(i => i.tech == 'js')
   setProjects(newData)
  }
  const Reactfilter = () => {
    let newData = data.filter(i => i.tech == 'react')
    setProjects(newData)
   }
   const allfilter = () => {
  
    setProjects(data)
   }

   const modeChanger = () => {
    if(mode == 'light'){

      setMode('dark')
    } else {
      setMode('light')
    }
   }
  
  return (
    <div className={mode == 'light'? 'app' : 'app dark'}>
      <button onClick={modeChanger}>mode</button>
      <button onClick={allfilter}>All</button>
      <button onClick={Reactfilter}>React Project</button>
      <button onClick={JSfilter}>JS Projects</button>
      {projects.map(i => <h1>{i.name}</h1>)}
      {mode}
    </div>
  );
}



export default App;













