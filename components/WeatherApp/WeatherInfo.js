import { useState } from "react";
import axios from "axios";
import "./Weather.css";
import BackgroundSection from "../Background/BackgroundSection";
import video from "../../img/backg-video.mp4";

function WeatherInfo() {
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [tempFeelsLike, setTempFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windspeed, setWindSpeed] = useState("");
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  async function checkWeather(e) {
    e.preventDefault();
    //console.log(query);
    var response = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          mode: JSON,
          q: query,
          appid: "9f0a41bdc8ef21033b6cdd726a3f4044",
        },
      }
    );
    //console.log();
    setTemperature((response.data.main.temp - 273.15).toFixed(2)); // convert k to celsius degrees ---- C = K - 273.15
    setTempFeelsLike((response.data.main.feels_like - 273.15).toFixed(2)); //to.toFixed(2) added to avoid lots of decimals
    setWeather(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWindSpeed(response.data.wind.speed);
  }

  return (
    <>
      <div>
        <BackgroundSection
          src={video}
          background_message={"Check out the weather ☼"}
          show_btn={false}
          btn_link={""}
          btn_text={""}
        />
      </div>
      <div class="weather-container">
        <form class="register-form">
          <input
            value={query}
            onChange={handleSearch}
            class="field-weather"
            placeholder="Enter Irish city"
          />
          <button onClick={checkWeather} class="btn-weather">
            {" "}
            Search{" "}
          </button>
          <br />
          <p>
            {query ? (
              <span>
                <h2>
                  Weather in {query}: {weather}{" "}
                </h2>
                <h4> ℃ Temperature: {temperature} °C</h4>
                <h4> 🌤 Feels like: {tempFeelsLike} °C</h4>
                <h4> ☂ Humidity: {humidity}</h4>
                <h4> 🌪 Wind speed: {windspeed}</h4>
              </span>
            ) : (
              ""
            )}
          </p>
        </form>
      </div>
    </>
  );
}

export default WeatherInfo;
