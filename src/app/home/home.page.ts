import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Province } from '../geo-divisions';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
})
export class HomePage {
  provinces: Array<Province> = [{
    name: "munster",
    url: "/munster"
  },
  {
    name: "ulster",
    url: "/ulster"
  },
  {
    name: "connaught",
    url: "/connaught"
  },
  {
    name: "leinster",
    url: "/leinster"
  }
  ]
  constructor() { }
}
