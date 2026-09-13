import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Istudent } from '../../model/student-model';
// import { setFlagsFromString } from 'v8';
import { _MatSnackBarBase, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  @ViewChild('stdForm') stdForm!:NgForm ;
     IsInEditMode:boolean = false ;
  constructor(private _stdService:StudentService , private _snackbar:MatSnackBar) { }
     editObj!:Istudent;
  ngOnInit(): void {
             this._stdService.emiteditStudent$
              .subscribe(res=>{
                  if(res){
                      this.stdForm.form.patchValue(res) ;
                      this.editObj =res;
                      this.IsInEditMode= true

                  }
              })
  }

  onAdd(){
     if(this.stdForm.form.valid){
       let newObj = {
               ...this.stdForm.form.value,
                id:Date.now()
            }
          this._stdService.onCreate(newObj)
                .subscribe({
                      next:res=>{
                          this._snackbar.open(res.msg,'close',{
                            duration:3000
                        })
                         this.stdForm.form
                    } ,
                    error:err=>{
                            this._snackbar.open(err);
                      }
                })

     }
   }


   onUpdate(){

    if(this.stdForm.form.valid){

      let updateId =this.editObj.id;
      let updateObj  ={
                ...this.stdForm.form.value ,
                id:updateId
         }
         this._stdService.onUpdate(updateObj)
            .subscribe({
               next:res=>{
                     this._snackbar.open(res.msg,'close',{
                         duration:3000
                     })

                     this.stdForm.reset();
                        this.IsInEditMode = false;

                 },
                 error:err=>{
                          this._snackbar.open(err,'close',{
                                 duration:3000
                          })
                 }
            })
    }
    }
}
