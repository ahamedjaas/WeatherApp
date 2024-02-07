
import React, { useState, useEffect } from 'react';
import './Home.css';
const KEY='4d66df8b5df9e57ec098e501d491b5a0';

const Home = ({ apiKey, defaultCity }) => {
  const [city, setCity] = useState(defaultCity || '');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (defaultCity) {
      handleSearch(defaultCity);
    }
  }, [defaultCity]);

  const handleSearch = async (cityName) => {
    if (cityName.trim() === '') {
      setError('Please enter a city name');
      setWeatherData(null);
      return;
    }

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}`);
      const data = await response.json();

      if (response.ok) {
        const temperature = data.main.temp;
        const condition = data.weather[0].main;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const description = data.weather[0].description;

        setWeatherData({ temperature, condition, humidity, windSpeed, description, city: cityName });
        setError('');
      } else {
        setError('City not found. Please enter a valid city name.');
        setWeatherData(null);
      }
    } catch (error) {
      setError('Failed to fetch weather data. Please try again.');
      setWeatherData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(city);
  };

  return (
    <div className="weather-app">
      <h1>Real-Time Weather App</h1>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {weatherData && (
        <div className="weather-details">
          <h2>Weather Details for {weatherData.city}</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Condition: {weatherData.condition}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind Speed: {weatherData.windSpeed} km/h</p>
          <p>Description: {weatherData.description}</p>
        </div>
      )}
    </div>
  );
};
export default Home;
