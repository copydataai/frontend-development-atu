import { Component, OnInit } from '@angular/core';
import { DataService, College } from '../Services/data.service';
import { Observable, tap, catchError, timeout, of } from 'rxjs';

@Component({
  selector: 'app-get-college',
  templateUrl: './get-college.component.html',
  styleUrls: ['./get-college.component.css']
})
export class GetCollegeComponent implements OnInit {
  // Variable to store the fetched college data
  college: College | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Fetch student college data from the service
    this.dataService.getStudentData()
      .pipe(
        timeout(500), // Set a timeout of 500ms for the request; throws an error if exceeded
        tap((data: College) => {
          this.college = data; // Assign the fetched data to the 'college' variable
          console.log(this.college); // Log the college data for debugging
        }),
        catchError((error) => {
          console.error('Error fetching college data', error); // Log the error
          // Return a default college object in case of an error
          return of(this.dataService.getGMITCollege());
        })
      )
      .subscribe(); // Subscribe to execute the observable
  }
}
