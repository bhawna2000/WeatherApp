import { useEffect, useState } from "react";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");
  const [error, setError] = useState(false);

  const fetchWeatherData = async () => {
    //const apiKey = "1e638f0daad4ba8b8fc3bff14b476ec7";
    const baseUrl = `http://localhost:8080/api/v1/get-weather/${search}`;

    const response = await fetch(baseUrl);
    if (!response.ok) {
      setError(true);
      setCity(null);
    } else {
      setError(false);
      const data = await response.json();
      console.log(data);
      setCity(data);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            placeholder=" Enter city name"
            //value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {error ? (
          <h1>City not found</h1>
        ) : city ? (
          <div className="info">
            <div className="location">
              <i className="fas fa-street-view"></i>
              {search}
            </div>
            <h1 className="temp">{city.main.temp}°C</h1>
            <h1 className="tempMinMax">
              <i className="fa-solid fa-temperature-high"></i>{" "}
              {city.main.temp_max} °C |
              <i className="fa-solid fa-temperature-low"></i>{" "}
              {city.main.temp_min} °C
            </h1>
            <h1>
              <i className="fa-solid fa-water"></i>
              {city.main.humidity}%
            </h1>
            <h1 className="wind">
              <i className="fa-solid fa-wind"></i>
              {city.wind.speed}km/h
            </h1>
          </div>
        ) : null}
      </div>
    </>
  );
}
