import { useState } from "react";

const API_KEY = "95221a942990bfff4b8c1d5b5ea0c663";

function WeatherAlert() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;

    try {
      setError("");
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        setError("City not found");
        setWeather(null);
        return;
      }

      setWeather(data);
    } catch {
      setError("Something went wrong");
    }
  };

  return (
    <div className="page">
      <div className="weather-box">
        <h2 className="weather-title">Weather</h2>

        <div className="weather-input">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={getWeather}>Search</button>
        </div>

        {error && <p className="weather-error">{error}</p>}

        {weather && (
          <div className="weather-info">
            <h3>{weather.name}</h3>

            <div className="weather-temp">
              {Math.round(weather.main.temp)}°C
            </div>

            <p className="weather-desc">
              {weather.weather[0].description}
            </p>

            <div className="weather-extra">
              <span>💧 {weather.main.humidity}%</span>
              <span>💨 {weather.wind.speed} m/s</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherAlert;
