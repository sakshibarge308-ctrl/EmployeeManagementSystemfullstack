import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../model/employee';
import { EmployeeserveService } from '../services/employeeserve.service';

@Component({
  selector: 'app-addemp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addemp.component.html',
  styleUrl: './addemp.component.css'
})
export class AddempComponent {

  emp: Employee = new Employee()
  constructor(private es: EmployeeserveService) { }
  submitdata() {
    this.es.insert(this.emp).subscribe(data => {
      if (data != null) {
        alert("Employee Added Successfully")
      }
    })
  }
}

