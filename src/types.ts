export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  location: string;
  icon: string;
  feelsLike?: number;
  uvIndex?: number;
  visibility?: number;
}

export interface WeatherCardProps {
  data: WeatherData;
  theme?: 'light' | 'dark';
  onRefresh?: () => void;
}
