/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const cityWeatherData = {
    Chennai: { temperature: 32, condition: 'Sunny' },
    Coimbatore: { temperature: 28, condition: 'Partly Cloudy' },
    Mumbai: { temperature: 30, condition: 'Rainy' },
    Delhi: { temperature: 25, condition: 'Cloudy' },
    Bangalore: { temperature: 29, condition: 'Clear' }
  };

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (city.trim() === '') {
      setError('Please enter a city name');
      setWeatherData(null);
      return;
    }

    const cityData = cityWeatherData[city];
    if (!cityData) {
      setError('City not found');
      setWeatherData(null);
      return;
    }

    setWeatherData(cityData);
    setError('');
  };

  return (
    <div className="weather-app">
      <h1>Real-Time Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <div className="error-message">{error}</div>}
      {weatherData && (
        <div className="weather-details">
          <h2>Weather Details for {city}</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Condition: {weatherData.condition}</p>
        </div>
      )}
    </div>
  );
};

export default Home;*/
/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const getRandomTemperature = () => {
    return Math.floor(Math.random() * (40 - 10 + 1)) + 10; // Random temperature between 10°C and 40°C
  };

  const handleSearch = () => {
    if (city.trim() === '') {
      setError('Please enter a city name');
      setWeatherData(null);
      return;
    }

    const temperature = getRandomTemperature();
    setWeatherData({ temperature, city });
    setError('');
  };

  return (
    <div className="weather-app">
      <h1>Real-Time Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <div className="error-message">{error}</div>}
      {weatherData && (
        <div className="weather-details">
          <h2>Weather Details for {weatherData.city}</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Condition: Randomly generated</p>
        </div>
      )}
    </div>
  );
};

export default Home;*/
/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const getRandomTemperature = () => {
    return Math.floor(Math.random() * (40 - 10 + 1)) + 10; // Random temperature between 10°C and 40°C
  };

  const getRandomWeatherCondition = () => {
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Thunderstorm', 'Snowy'];
    const randomIndex = Math.floor(Math.random() * conditions.length);
    return conditions[randomIndex];
  };

  const handleSearch = () => {
    if (city.trim() === '') {
      setError('Please enter a city name');
      setWeatherData(null);
      return;
    }

    const temperature = getRandomTemperature();
    const condition = getRandomWeatherCondition();
    setWeatherData({ temperature, condition, city });
    setError('');
  };

  return (
    <div className="weather-app">
      <h1>Real-Time Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <div className="error-message">{error}</div>}
      {weatherData && (
        <div className="weather-details">
          <h2>Weather Details for {weatherData.city}</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Condition: {weatherData.condition}</p>
        </div>
      )}
    </div>
  );
};

export default Home;*/
/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const getRandomTemperature = () => {
    return Math.floor(Math.random() * (40 - 10 + 1)) + 10; // Random temperature between 10°C and 40°C
  };

  const getRandomWeatherCondition = () => {
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Thunderstorm', 'Snowy'];
    const randomIndex = Math.floor(Math.random() * conditions.length);
    return conditions[randomIndex];
  };

  const getRandomHumidity = () => {
    return Math.floor(Math.random() * (100 - 40 + 1)) + 40; // Random humidity between 40% and 100%
  };

  const getRandomWindSpeed = () => {
    return Math.floor(Math.random() * (30 - 5 + 1)) + 5; // Random wind speed between 5 km/h and 30 km/h
  };

  const getRandomDescription = () => {
    const descriptions = ['Partly cloudy', 'Light rain', 'Heavy snow', 'Windy', 'Foggy'];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
  };

  const handleSearch = () => {
    if (city.trim() === '') {
      setError('Please enter a city name');
      setWeatherData(null);
      return;
    }

    const temperature = getRandomTemperature();
    const condition = getRandomWeatherCondition();
    const humidity = getRandomHumidity();
    const windSpeed = getRandomWindSpeed();
    const description = getRandomDescription();
    setWeatherData({ temperature, condition, humidity, windSpeed, description, city });
    setError('');
  };

  return (
    <div className="weather-app">
      <h1>Real-Time Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
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

export default Home;*/
/*import React, { useState } from 'react';
import './Home.css';
import OpenWeatherMap from 'openweathermap-without-key';

const Home = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const data = await OpenWeatherMap.getCurrentWeatherByCityName(city);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="search-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeatherData}>Search</button>
      </div>
      {weatherData && (
        <div className="weather-details">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Home;*/
/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const getRandomTemperature = () => {
    return Math.floor(Math.random() * (40 - 10 + 1)) + 10; // Random temperature between 10°C and 40°C
  };

  const getRandomWeatherCondition = () => {
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Thunderstorm', 'Snowy'];
    const randomIndex = Math.floor(Math.random() * conditions.length);
    return conditions[randomIndex];
  };

  const getRandomHumidity = () => {
    return Math.floor(Math.random() * (100 - 40 + 1)) + 40; // Random humidity between 40% and 100%
  };

  const getRandomWindSpeed = () => {
    return Math.floor(Math.random() * (30 - 5 + 1)) + 5; // Random wind speed between 5 km/h and 30 km/h
  };

  const getRandomDescription = () => {
    const descriptions = ['Partly cloudy', 'Light rain', 'Heavy snow', 'Windy', 'Foggy'];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
  };

  const handleSearch = async () => {
    if (city.trim() === '') {
      setError('Please enter a city name');
      setWeatherData(null);
      return;
    }

    try {
      // Simulate fetching weather data from an API (replace with your API call)
      const temperature = getRandomTemperature();
      const condition = getRandomWeatherCondition();
      const humidity = getRandomHumidity();
      const windSpeed = getRandomWindSpeed();
      const description = getRandomDescription();
      setWeatherData({ temperature, condition, humidity, windSpeed, description, city });
      setError('');
    } catch (error) {
      setError('City not found. Please enter a valid city name.');
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-app">
      <h1>Real-Time Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
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

export default Home;*/
/*import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '4d66df8b5df9e57ec098e501d491b5a0';

  const handleSearch = async () => {
    if (city.trim() === '') {
      setError('Please enter a city name');
      setWeatherData(null);
      return;
    }

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();

      if (response.ok) {
        const temperature = data.main.temp;
        const condition = data.weather[0].main;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const description = data.weather[0].description;

        setWeatherData({ temperature, condition, humidity, windSpeed, description, city });
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

  return (
    <div className="weather-app">
      <h1>Real-Time Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
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

export default Home;*/
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
