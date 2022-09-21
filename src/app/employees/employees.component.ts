import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employeeService';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees : any;
  active= false;
  constructor( private service : EmployeeService , private router : Router) {}

  async ngOnInit(): Promise<void> {
    this.active = false;
    this.employees = await this.service.getEmployees();
  }

  filter(itemList : any) {
    if (this.active)
      {
        return itemList.filter( (employee: { active: boolean; }) => employee.active )
      }
    return itemList;
  }

  setActive(){
    this.active = !this.active;
  }

  goTo(){
     this.router.navigate(['/employee-details'])
  }

}
