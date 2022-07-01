
import { useState } from 'react';
import './App.css';

const api = {
  key: '6457cf0a565b01747776b99d5d79e8b4',
  base: 'https://api.openweathermap.org/data/2.5/'
}

// https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=6457cf0a565b01747776b99d5d79e8b4

// ${api.base}weather?q=${search}&units=metric&&APPID=${api.key}

function App() {

  const [search, setSearch] = useState(" ")
  const [weatherData, setWeatherData] = useState({})

  const searchPressed = () => {
    fetch(`${api.base}weather?q=cheyenne&units=metric&&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      const data = {
        coord: result.coord,
        weather: result.weather[0].description,
        temp: result.main.temp,
        temp_max: result.main.temp_max,
        temp_min: result.main.temp_min
      }
      setWeatherData(data)
    })
  }

  return (
    <div className="App">
      <h1 id='title'>Weather App</h1>

      <div className="input">
        <input type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />


        <button onClick={searchPressed}>Search</button>
      </div>

      <div className="data-display">
        <p id="">{search}</p>
        <p id="">{weatherData.weather}</p>
        <p id="">{weatherData.temp}</p>
        <p id="">{weatherData.temp_min}</p>
        <p id="">{weatherData.temp_max}</p>
        <p id="">{}</p>
        <p id="">{}</p>
        <p id="">Sunny</p>
      </div>
    </div>
  );
}

export default App;
