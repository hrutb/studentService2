import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component/student-form/student-form.component';
import { StudentTableComponent } from './shared/component/student-table/student-table.component';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MaterialModule } from './shared/Module/material.module';
import { FormsModule } from '@angular/forms';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { ScrollToDirective } from './shared/directives/scroll-to.directive';


@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentTableComponent,
    GetConfirmComponent,
    ScrollToDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    MaterialModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
