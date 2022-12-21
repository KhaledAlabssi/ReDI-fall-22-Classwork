import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [desc, setDesc] = useState(null);
  const [icon, setIcon] = useState(null)

  function submitHandler(e) {
    e.preventDefault();
    setCity((i) => e.target.cityValue.value);
    e.target.cityValue.value = "";
    // fetchData(e.target.cityValue.value)
  }

  function fetchData(e) {
    axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=f9169a4f32425e54dca854db7468d039&units=metric`
    ).then((i) => {
      let data = i.data;
      console.log(data);
      setTemp(data.main.temp);
      setDesc(data.weather[0].description);
      setIcon(data.weather[0].icon)
    });
  }

  useEffect(() => {
    if (city == null) {
      return;
    } else {
      fetchData(city);
    }
    console.log("inside effect");
    return fetchData(city);
  }, [city]);

  return (
    <div className={temp ==  null ? 'App' : temp < 8 ? 'App cold' : 'App hot'}>
      <form action="" onSubmit={submitHandler}>
        <input type="text" name="cityValue" />
        <button type="submit">Go</button>
      </form>
      
      {temp != null && <h1>{Math.floor(temp)}</h1>}
      {desc != null && <h1>{desc}</h1>}
      {icon != null && <img src={`http://openweathermap.org/img/w/${icon}.png`} />}

    </div>
  );
}

export default App;
