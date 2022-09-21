import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employeeService';
import {Employee} from "../model/employee.model";
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees : any;
  constructor( private service : EmployeeService) {}

  async ngOnInit(): Promise<void> {
    this.employees = await this.service.getEmployees();
  }

}
