import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../../../app/employee.service';
import { Datum } from '../../../../src/app/models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'soa-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  //@Input() e;

  elist: Datum;

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getElist();
  }

  onLoadProfile(id){
    this.router.navigate(['/profile',id]);
  }

  getElist(){
    this.elist = this.employeeService.getData();
  }  


}
