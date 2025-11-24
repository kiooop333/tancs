# Weather Card Component

A beautiful, responsive weather card component built with React and TypeScript. Displays current weather information with a modern UI design.

## Features

- 🎨 Beautiful gradient design with smooth animations
- 🌙 Light and dark theme support
- 📱 Fully responsive design
- ⚡ Built with React 18 and TypeScript
- 🔄 Optional refresh functionality
- 📊 Displays comprehensive weather data:
  - Temperature and "feels like" temperature
  - Weather condition with emoji icons
  - Humidity
  - Wind speed
  - UV index (optional)
  - Visibility (optional)
  - Location

## Installation

```bash
npm install weather-card
```

## Usage

### Basic Example

```tsx
import React from 'react';
import { WeatherCard } from 'weather-card';

const App = () => {
  const weatherData = {
    temperature: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    location: 'San Francisco, CA',
    icon: '02d',
  };

  return <WeatherCard data={weatherData} />;
};

export default App;
```

### With Theme and Refresh

```tsx
<WeatherCard 
  data={weatherData}
  theme="dark"
  onRefresh={() => console.log('Refreshing weather...')}
/>
```

## Props

### `WeatherCardProps`

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | `WeatherData` | Yes | - | Weather data object |
| `theme` | `'light' \| 'dark'` | No | `'light'` | Card theme |
| `onRefresh` | `() => void` | No | - | Callback for refresh button |

### `WeatherData`

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `temperature` | `number` | Yes | Current temperature in Celsius |
| `condition` | `string` | Yes | Weather condition (e.g., "Sunny", "Rainy") |
| `humidity` | `number` | Yes | Humidity percentage (0-100) |
| `windSpeed` | `number` | Yes | Wind speed in km/h |
| `location` | `string` | Yes | Location name |
| `icon` | `string` | Yes | Weather icon code (see icon map below) |
| `feelsLike` | `number` | No | "Feels like" temperature in Celsius |
| `uvIndex` | `number` | No | UV index (0-11+) |
| `visibility` | `number` | No | Visibility in kilometers |

### Weather Icon Codes

The component supports standard weather icon codes:

- `01d` / `01n` - Clear sky (day/night)
- `02d` / `02n` - Few clouds (day/night)
- `03d` / `03n` - Scattered clouds (day/night)
- `04d` / `04n` - Broken clouds (day/night)
- `09d` / `09n` - Shower rain (day/night)
- `10d` / `10n` - Rain (day/night)
- `11d` / `11n` - Thunderstorm (day/night)
- `13d` / `13n` - Snow (day/night)
- `50d` / `50n` - Mist (day/night)

## Development

### Setup

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the demo.

### Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npm run type-check
```

## Styling

The component uses CSS Modules for scoped styling. You can customize the appearance by:

1. Using CSS variables (coming in v2)
2. Creating a wrapper component with custom CSS
3. Modifying the component directly if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
