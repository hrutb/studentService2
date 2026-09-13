import { Component, OnInit } from '@angular/core';
// import { students } from '../../const/studentArr';
import { Istudent } from '../../model/student-model';
import { StudentService } from '../../services/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
    studentArr!:Istudent[];
  constructor(private _stdService:StudentService, private _snackabr:MatSnackBar) { }

  ngOnInit(): void {
           this.getAll();
  }


  getAll(){
    this._stdService.fetchAll()
        .subscribe({
            next:res=>{
                  this.studentArr = res ;
            },
            error:err=>{
                 console.log(err)
            }
        })
  }

}
