import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../model/student-model';
import { StudentService } from '../../services/student.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { _MatSnackBarContainerBase, MatSnackBar } from '@angular/material/snack-bar';
import { ScrollToDirective } from '../../directives/scroll-to.directive';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  constructor(private _stdService:StudentService, private _matDialog:MatDialog, private  _snackbar:MatSnackBar) { }

  @Input() getStudent!:Istudent[];


  ngOnInit(): void {
     console.log(this.getStudent);
  }

  @ViewChild(ScrollToDirective) scrollDirective!:ScrollToDirective;

  onEditObj(std:Istudent){
         this._stdService.onEdit(std)
          //  window.scrollTo({})
            this.scrollDirective.scrollToElement();
  }

  onRemove(removeId:number){
      let config =  new MatDialogConfig() ;
          config.disableClose = false;
          config.width=  '800px' ;
          config.height= '500px';

      let _matDialogRef= this._matDialog.open(GetConfirmComponent)
      _matDialogRef.afterClosed()
          .subscribe(flag=>{
             if(flag){
                  this._stdService.onRemove(removeId)
                        .subscribe({
                            next:res=>{
                              this._snackbar.open(res.msg,'close', {
                                            duration:3000
                              })
                            },
                            error:err=> {
                                 console.log(err);
                            },
                     })

              }
          })

  }



}
