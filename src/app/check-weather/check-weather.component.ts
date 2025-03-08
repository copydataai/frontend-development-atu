import { Component, OnInit } from '@angular/core';
import { WeatherService, WeatherResponse } from '../Services/weather.service';
import { timeout, tap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-check-weather',
  imports: [],
  templateUrl: './check-weather.component.html',
  styleUrl: './check-weather.component.css'
})
export class CheckWeatherComponent implements OnInit {

  weather: WeatherResponse | undefined; // Stores the fetched weather data

  constructor(private weatherService: WeatherService) { } // Injects WeatherService

  ngOnInit(): void {
    // Fetches weather data for Galway with a 2-second timeout
    this.weatherService.getWeatherGalway().pipe(
      timeout(2000), // Cancels the request if it takes longer than 2 seconds
      tap((data: WeatherResponse) => {
        this.weather = data; // Assigns fetched data to the component variable
        console.log('Weather data received:', this.weather); // Logs the data
      }),
      catchError((error) => {
        console.error('Error fetching weather data', error); // Logs the error
        return of(undefined); // Returns an observable with 'undefined' to prevent breaking the stream
      })
    ).subscribe();
  }
}
