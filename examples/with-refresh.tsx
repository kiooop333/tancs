import React, { useState } from 'react';
import { WeatherCard } from '../src/index';
import { WeatherData } from '../src/types';

/**
 * Example with refresh functionality
 */
const WithRefreshExample = () => {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    location: 'London, UK',
    icon: '02d',
    feelsLike: 22,
    uvIndex: 3,
    visibility: 8,
  });

  const handleRefresh = () => {
    // Simulate fetching new weather data
    setWeather(prev => ({
      ...prev,
      temperature: Math.round(Math.random() * 30),
      humidity: Math.round(Math.random() * 100),
      windSpeed: Math.round(Math.random() * 40),
    }));
  };

  return (
    <WeatherCard
      data={weather}
      theme="light"
      onRefresh={handleRefresh}
    />
  );
};

export default WithRefreshExample;
