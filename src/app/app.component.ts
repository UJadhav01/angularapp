import { Component, Input } from '@angular/core';
import { EmployeeInfo } from './models/employeeInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  @Input() employeeInfo:EmployeeInfo=new EmployeeInfo();
  constructor() {
    this.employeeInfo.emp_id=1;
    this.employeeInfo.emp_name='Shiv';
    this.employeeInfo.emp_salary=60000;
    this.employeeInfo.emp_company='tcs';
    this.employeeInfo.emp_department='developer';
  }
}
