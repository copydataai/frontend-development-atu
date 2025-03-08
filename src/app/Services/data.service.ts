import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, timeout, of, catchError, tap } from "rxjs";


export interface College {
  School: string;
  Address: string;
  students: Student[];
}

export interface Student {
  name: string;
  age: number;
  id: string;
  address: string;
  course: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private gmitCollege: College;
  constructor(private httpClient: HttpClient) {
    this.gmitCollege = {
      "School": "GMIT",
      "Address": "Dublin Road, Galway",
      "students": [
        {
          "name": "Tim",
          "age": 22,
          "id": "G0012345",
          "address": "1 Fake Street",
          "course": "Software"
        },
        {
          "name": "Mary",
          "age": 24,
          "id": "G0022123",
          "address": "2 Fake Street",
          "course": "Science"
        },
        {
          "name": "Mark",
          "age": 21,
          "id": "G0012343",
          "address": "3 Fake Street",
          "course": "French"
        }
      ]
    };

  }



  getGMITCollege(): College {
    return this.gmitCollege;
  }


  getStudentData(): Observable<College> {
    return this.httpClient.get<College>("https://jsonblob.com/api/jsonblob/1336347674273832960")
      .pipe(
        timeout({ each: 500, with: () => of(this.getGMITCollege()) }),
        tap(data => console.log(data)),
      );
  }


}
