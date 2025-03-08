import { Component, OnInit } from '@angular/core';
import { DataService, College } from '../Services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-college',
  templateUrl: './get-college.component.html',
  styleUrls: ['./get-college.component.css']
})
export class GetCollegeComponent implements OnInit {
  college: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getStudentData().subscribe({
      next(data: College) {
        this.college = data;
        console.log(this.college);
      },
      error(error: any) {
        console.error('Error fetching college data', error);
      },
      complete() {
        console.log('Completed fetching college data');
      },
    });
    console.log(this.college)
  }
}
