import { Component } from '@angular/core';
import { CustomdirectiveDirective } from "../customdirective.directive";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomdirectiveDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
