import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface College {
  School: string; // Name of the college
  Address: string; // Address of the college
  students: Student[]; // Array of students in the college
}

export interface Student {
  name: string;
  age: number;
  id: string;
  address: string;
  course: string;
}

@Injectable({
  providedIn: 'root' // Makes this service available throughout the application
})
export class DataService {

  private gmitCollege: College; // Stores a default College object

  constructor(private httpClient: HttpClient) {
    // Initializing a default college object with sample student data
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

  /**
   * Returns the default GMIT College object.
   * Used as a fallback in case of errors in API calls.
   */
  getGMITCollege(): College {
    return this.gmitCollege;
  }

  /**
   * Fetches student data from an external API.
   * The response is expected to be of type College.
   * @returns {Observable<College>} An observable containing the college data.
   */
  getStudentData(): Observable<College> {
    return this.httpClient.get<College>("https://jsonblob.com/api/jsonblob/1336347674273832960");
  }
}
