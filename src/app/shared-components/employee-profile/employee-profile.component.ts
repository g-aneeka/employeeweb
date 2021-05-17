import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Datum } from 'src/app/models/employee.model';

@Component({
  selector: 'soa-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

  id:number;
  details:Datum;
  name:string;


  constructor( private eservice : EmployeeService, private route : ActivatedRoute) {
    this.route.params
    .subscribe(
      (params : Params) => {
        this.id = +params['id'];
      }
    )
   }

  ngOnInit(): void {
    this.getDetails();
  }

  GoBack(){
    window.history.back();
  }

  getDetails(){
    this.details = this.eservice.getDataById(this.id);
  }

  band(i: string){
    if(i==='A'){
      return 'orange';
    }    
    else if (i === 'B'){
      return 'red';
    }
    else if (i === 'C'){
      return 'blue';
    }
    else if (i === 'D'){
      return 'green';
    }
  }


}
