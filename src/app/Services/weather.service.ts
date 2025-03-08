import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// Defines the structure of the weather API response
export interface WeatherResponse {
  base: string; // Internal parameter for OpenWeather API
  clouds: Clouds; // Cloud information
  cod: number; // API response code
  coord: Coord; // Geographic coordinates (latitude & longitude)
  dt: number; // Data calculation time (UNIX timestamp)
  id: number; // City ID
  main: Main; // Main weather details (temperature, pressure, humidity, etc.)
  name: string; // City name
  sys: Sys; // System data (country, sunrise/sunset times)
  timezone: number; // Timezone offset in seconds
  visibility: number; // Visibility in meters
  weather: Weather[]; // Array of weather conditions (description, icon, etc.)
  wind: Wind; // Wind details (speed, direction, gusts)
}

// Defines cloud-related data
export interface Clouds {
  all: number; // Cloudiness percentage
}

// Defines geographic coordinates
export interface Coord {
  lat: number; // Latitude
  lon: number; // Longitude
}

// Defines temperature, pressure, and humidity details
export interface Main {
  feels_like: number; // Feels-like temperature
  grnd_level: number; // Atmospheric pressure at ground level
  humidity: number; // Humidity percentage
  pressure: number; // Atmospheric pressure at sea level (hPa)
  sea_level: number; // Atmospheric pressure at sea level
  temp: number; // Current temperature in Kelvin
  temp_max: number; // Maximum recorded temperature
  temp_min: number; // Minimum recorded temperature
}

// Defines system-related data such as country and sunrise/sunset times
export interface Sys {
  country: string; // Country code (e.g., "IE" for Ireland)
  sunrise: number; // Sunrise time (UNIX timestamp)
  sunset: number; // Sunset time (UNIX timestamp)
}

// Defines weather condition details
export interface Weather {
  description: string; // Short description (e.g., "clear sky")
  icon: string; // Icon ID for representing weather conditions
  id: number; // Weather condition ID
  main: string; // Main weather category (e.g., "Rain", "Clear")
}

// Defines wind-related details
export interface Wind {
  deg: number; // Wind direction in degrees
  gust: number; // Wind gust speed
  speed: number; // Wind speed in meters per second
}

@Injectable({
  providedIn: 'root' // Makes this service available across the application
})
export class WeatherService {
  private galwayID = '2964180'; // City ID for Galway (OpenWeather API)
  private apiURL = 'https://api.openweathermap.org/data/2.5/weather'; // Base API URL
  private apiKey = '5796abbde9106b7da4febfae8c44c232'; // API key for OpenWeather (should be stored securely)

  constructor(private httpClient: HttpClient) {}

  /**
   * Fetches weather data for Galway using the OpenWeather API.
   * @returns {Observable<WeatherResponse>} Observable containing weather data.
   */
  getWeatherGalway(): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherResponse>(
      `${this.apiURL}?id=${this.galwayID}&appid=${this.apiKey}`
    );
  }
}
