import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  static API_KEY = "2ee2ed84"
  static BASE_URL = `http://www.omdbapi.com/?apikey=${MoviesService.API_KEY}`

  constructor(public httpClient: HttpClient) { }


  getMovies(title: string): Observable<any> {
    return this.httpClient.get(`${MoviesService.BASE_URL}&s=${title}`)
  }

}
