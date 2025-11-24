import React from 'react';
import { WeatherCard } from '../src/index';

/**
 * Example using dark theme
 */
const DarkThemeExample = () => {
  return (
    <WeatherCard
      data={{
        temperature: 18,
        condition: 'Rainy',
        humidity: 80,
        windSpeed: 20,
        location: 'Seattle, WA',
        icon: '10n',
        feelsLike: 16,
        visibility: 5,
      }}
      theme="dark"
    />
  );
};

export default DarkThemeExample;
