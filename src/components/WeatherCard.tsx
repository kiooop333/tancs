import React from 'react';
import { WeatherCardProps } from '../types';
import styles from '../styles/WeatherCard.module.css';

const getWeatherIcon = (iconCode: string): string => {
  const iconMap: { [key: string]: string } = {
    '01d': '☀️',
    '01n': '🌙',
    '02d': '⛅',
    '02n': '🌤️',
    '03d': '☁️',
    '03n': '☁️',
    '04d': '☁️',
    '04n': '☁️',
    '09d': '🌧️',
    '09n': '🌧️',
    '10d': '🌦️',
    '10n': '🌧️',
    '11d': '⛈️',
    '11n': '⛈️',
    '13d': '❄️',
    '13n': '❄️',
    '50d': '🌫️',
    '50n': '🌫️',
  };

  return iconMap[iconCode] || '🌤️';
};

const WeatherCard: React.FC<WeatherCardProps> = ({ 
  data, 
  theme = 'light',
  onRefresh 
}) => {
  const icon = getWeatherIcon(data.icon);

  return (
    <div className={`${styles.card} ${theme === 'dark' ? styles.dark : ''}`}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.location}>{data.location}</div>
          {onRefresh && (
            <button 
              className={styles.refreshButton}
              onClick={onRefresh}
              aria-label="Refresh weather"
              title="Refresh"
            >
              🔄
            </button>
          )}
        </div>

        <div className={styles.mainWeather}>
          <div className={styles.iconContainer}>{icon}</div>
          <div className={styles.weatherInfo}>
            <div className={styles.temperature}>
              {Math.round(data.temperature)}<span className={styles.tempUnit}>°C</span>
            </div>
            <div className={styles.condition}>{data.condition}</div>
            {data.feelsLike !== undefined && (
              <div className={styles.feelsLike}>
                Feels like {Math.round(data.feelsLike)}°C
              </div>
            )}
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <div className={styles.detailLabel}>
              <span className={styles.detailIcon}>💧</span>Humidity
            </div>
            <div className={styles.detailValue}>{data.humidity}%</div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailLabel}>
              <span className={styles.detailIcon}>💨</span>Wind Speed
            </div>
            <div className={styles.detailValue}>{data.windSpeed} km/h</div>
          </div>

          {data.uvIndex !== undefined && (
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>
                <span className={styles.detailIcon}>☀️</span>UV Index
              </div>
              <div className={styles.detailValue}>{data.uvIndex}</div>
            </div>
          )}

          {data.visibility !== undefined && (
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>
                <span className={styles.detailIcon}>👁️</span>Visibility
              </div>
              <div className={styles.detailValue}>{data.visibility} km</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
