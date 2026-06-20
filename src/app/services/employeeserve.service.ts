import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeserveService {
  add(emp: Employee) {
    throw new Error('Method not implemented.');
  }
  //spring boot rest server url
  serveurl = "http://localhost:9001/employees"
  constructor(private http: HttpClient) { }
  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.serveurl);
  }
  insert(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.serveurl, emp);
  }
  search(id: any): Observable<Employee> {
    return this.http.get<Employee>(this.serveurl + "/" + id);
  }
  update(id: any, emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.serveurl + "/" + id, emp);
  }
  delete(id: any): Observable<any> {
    return this.http.delete<any>(this.serveurl + "/" + id);
  }
}
