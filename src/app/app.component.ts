import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetCollegeComponent } from "./get-college/get-college.component"
import { CheckWeatherComponent } from "./check-weather/check-weather.component"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GetCollegeComponent, CheckWeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
