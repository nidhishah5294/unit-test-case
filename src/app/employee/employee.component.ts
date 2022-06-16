import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private authenticationservice: AuthenticationService) { 
    this.authenticationservice.authenticate();
  }
  salSlip!:string;
  ngOnInit(): void {
  }

  getSalarySlip(){
    if(this.authenticationservice.checkAuthentication()){
    return  this.salSlip = 'Salary Slip';
    }else{
     return this.salSlip = 'Not Authenticated';
    }
  }

}
