import { Component, OnInit } from '@angular/core';
import Data from '../../models/employeedata.json';

@Component({
  selector: 'soa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employeeData = Data;

  constructor() { }

  ngOnInit(): void {
  }

}
