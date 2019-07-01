import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { map } from 'rxjs/operators';

import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee  : Employee;
  employees : Employee[];

  constructor(private http : Http) { }

  getEmployee()
  {
    return this.http.get('http://localhost:3000/employees/').pipe(map(res => res.json()));
  }

  addEmployee(newemp)
  {
      var headers = new Headers();
      headers.append('Content-type','application/json');
      return this.http.post('http://localhost:3000/employees', newemp , { headers : headers }).pipe(map(res => res.json()));
  }

  deleteEmployee(id)
  {
    return this.http.delete('http://localhost:3000/employess'+id).pipe(map(res => res.json()));
  }
}
