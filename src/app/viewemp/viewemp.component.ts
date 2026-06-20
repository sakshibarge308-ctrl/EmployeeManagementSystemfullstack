import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeserveService } from '../services/employeeserve.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewemp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewemp.component.html',
  styleUrl: './viewemp.component.css'
})
export class ViewempComponent implements OnInit {
  emparr: Employee[] = []
  constructor(private es: EmployeeserveService, private router: Router) { }
  fetchemps() {
    this.es.getAll().subscribe(data => {
      this.emparr = Array.isArray(data) ? data : [data]
      console.log(this.emparr)
    })
  }
  ngOnInit(): void {
    this.fetchemps();
  }
  delete(id: any) {
    this.es.delete(id).subscribe(data => {
      alert("Employee deleted succesfully")
      this.fetchemps()
    })
  }
  update(id: any) {
    this.router.navigate(["/upemp", id])
  }
}
