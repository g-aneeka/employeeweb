import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'soa-register-newform',
  templateUrl: './register-newform.component.html',
  styleUrls: ['./register-newform.component.scss']
})
export class RegisterNewformComponent implements OnInit {

  @ViewChild('rForm') regForm: NgForm;
  user = {
    name: "",
    email: "",
    age: "",
    contactnumber: "",
    region: "", 
  };
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value : any){
    console.log(value);
    this.submitted = true;
    this.user.name = this.regForm.value.name;
    this.user.email = this.regForm.value.email;
    this.user.age = this.regForm.value.personalinfo.age ;
    this.user.contactnumber = this.regForm.value.personalinfo.contactnumber;
    this.user.region = this.regForm.value.personalinfo.region;
    this.regForm.reset();
  }


}
