import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator-ass',
  templateUrl: './decorator-ass.component.html',
  styleUrls: ['./decorator-ass.component.css']
})
export class DecoratorAssComponent implements OnInit {

  @Input() employeeInfo;

  get transformedBody() {
    return Object.keys(this.employeeInfo);
  }
  constructor() {
  }

  ngOnInit() {
    console.log(`Send from parent Employee id = `,this.employeeInfo.emp_id);
    console.log(`Send from parent Employee Name = `,this.employeeInfo.emp_name);
    console.log(`Send from parent Employee salary = `,this.employeeInfo.emp_salary);
    console.log(`Send from parent Employee Company = `,this.employeeInfo.emp_company);
    console.log(`Send from parent Employee Department = `,this.employeeInfo.emp_department);

  }
}
