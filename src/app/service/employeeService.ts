import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Employee} from "../model/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}


  public getEmployees() : unknown {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get('https://617aea45cb1efe00170100ad.mockapi.io/api/employees', options ).toPromise();
  }
}
