import React, { useState } from 'react';
import './App.css';

const api = {
  key: "9ca19c30a79184c3bd58ae35e6891d7b",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [query, setquery] = useState('');
  const [weather, setweather] = useState('');

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setweather(result);
          setquery('');
          console.log(weather);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "Fabruary", "March", "April", "May", "June", "July", "Auguest", "September", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Fridaty", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <>
      <div className={
        (typeof weather.main != "undefined") ? ((weather.main.temp > 26) ? 'app warm' : 'app')
          : 'app'}>
        <main>
          <div className="search-box">
            <input type="text" className="search-bar" placeholder="Search your city....." onChange={e => setquery(e.target.value)} value={query} onKeyPress={search} />
          </div>
          {(typeof weather.main != "undefined") ? (
            <div>
              <div className="location-box">
                <div className="location">{weather.name},{weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)}°c
                </div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : ('')}
        </main>

      </div>

    </>
  );
}

export default App;
