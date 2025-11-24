import React from 'react';
import { WeatherCard } from '../src/index';

/**
 * Simple example of using the WeatherCard component
 */
const SimpleExample = () => {
  return (
    <WeatherCard
      data={{
        temperature: 22,
        condition: 'Clear Sky',
        humidity: 60,
        windSpeed: 8,
        location: 'New York, NY',
        icon: '01d',
        feelsLike: 20,
        uvIndex: 5,
        visibility: 10,
      }}
      theme="light"
    />
  );
};

export default SimpleExample;
