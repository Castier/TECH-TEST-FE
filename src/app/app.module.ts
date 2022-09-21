import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {EmployeeService} from "./service/employeeService";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [AppComponent, LoginComponent, EmployeesComponent, EmployeeDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatInputModule, ReactiveFormsModule, HttpClientModule, MatFormFieldModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
