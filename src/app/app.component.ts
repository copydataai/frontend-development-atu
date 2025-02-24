import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // declare the counter as a signal for incremental and reactivity
  counter = signal(0)
  showLookAtTheStar = signal(false);

  // add increment method to update the signal
  incrementCounter(): void {
    this.counter.update(n => n + 1)
  }


  // Add doubleClick event listener for the img
  onStarDoubleClick(): void {
    this.showLookAtTheStar.update((value: boolean) => !value)
  }
}
