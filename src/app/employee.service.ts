import { Injectable } from '@angular/core';
import Data from './models/employeedata.json';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private edata;

  constructor() { 
    this.edata = Data;
  }

  getData(){
    const elist = this.edata.Data;
    return elist;
  }

  getDataById(id){
    const edetails = this.edata.Data.find(Data => Data.userId === id);
    console.log('empdetails', edetails);
    return edetails;
  }  
}
