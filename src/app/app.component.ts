import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// importing component A and B from the ts file
import { ComponentaComponent } from './componenta/componenta.component';
import { ComponentbComponent } from './componentb/componentb.component';


@Component({
  selector: 'app-root',
  // inject component A and component B
  imports: [RouterOutlet, ComponentaComponent, ComponentbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // declaring name and age for reactivity by vars
  name = "Jose"
  age = 50
}
