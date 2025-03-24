import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle } from '@ionic/angular/standalone';
import { MoviesService } from "../services/movies.service";
import { OnInit } from "@angular/core"

export interface MovieI {
  Title: string;
  Type: string
  Year: string;
  Poster: string;
  imdbID: string;
}

export interface MoviesSearchI {
  Search: MovieI[];
  totalResults: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle],
})
export class HomePage implements OnInit {

  myMovies: MovieI[] = [];
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getWarMovies();
  }

  getWarMovies() {

    const war = this.moviesService.getMovies("war").subscribe(
      (data: MoviesSearchI) => {
        console.log(data)
        this.myMovies = data.Search
      }
    );
    console.log(war)
  }
}
