import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../model/employee';
import { EmployeeserveService } from '../services/employeeserve.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upemp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './upemp.component.html',
  styleUrl: './upemp.component.css'
})
export class UpempComponent {
  emp: Employee = new Employee()
  id = 0
  constructor(private es: EmployeeserveService, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id']
    es.search(this.id).subscribe(data => {
      this.emp = data
    })
  }
  submitdata() {
    this.es.update(this.id, this.emp).subscribe(data => {
      if (data != null) {
        alert("Employee Updated Successfully")
      }
    })
  }

}

