import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import WeatherCard from './components/WeatherCard';
import './styles/app.css';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);

  const weatherData = {
    temperature: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    location: 'San Francisco, CA',
    icon: '02d',
    feelsLike: 22,
    uvIndex: 6,
    visibility: 10,
  };

  const handleRefresh = () => {
    setRefreshCount(count => count + 1);
  };

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      <header className="app-header">
        <h1>Weather Card Component</h1>
        <button 
          className="theme-toggle"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      <main className="app-main">
        <div className="demo-section">
          <h2>Live Demo (Refresh count: {refreshCount})</h2>
          <WeatherCard 
            data={weatherData} 
            theme={isDark ? 'dark' : 'light'}
            onRefresh={handleRefresh}
          />
        </div>

        <div className="demo-section">
          <h2>More Examples</h2>
          <div className="cards-grid">
            <WeatherCard 
              data={{
                temperature: 18,
                condition: 'Rainy',
                humidity: 85,
                windSpeed: 25,
                location: 'London, UK',
                icon: '10d',
                feelsLike: 16,
                visibility: 5,
              }}
              theme={isDark ? 'dark' : 'light'}
            />
            <WeatherCard 
              data={{
                temperature: 35,
                condition: 'Sunny',
                humidity: 30,
                windSpeed: 5,
                location: 'Dubai, AE',
                icon: '01d',
                feelsLike: 38,
                uvIndex: 10,
              }}
              theme={isDark ? 'dark' : 'light'}
            />
            <WeatherCard 
              data={{
                temperature: -5,
                condition: 'Snowy',
                humidity: 70,
                windSpeed: 15,
                location: 'Moscow, RU',
                icon: '13d',
                feelsLike: -8,
              }}
              theme={isDark ? 'dark' : 'light'}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
