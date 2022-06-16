import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  constructor() { }
  userInfo = [{ id: '1', name: 'nidhi', age: 10 }, { id: '2', name: 'krishna', age: 30 }];
  outputVal: any;
  selectedUser!: User;
  ngOnInit(): void {
  }
  updateUserArr(val: any) {
    this.outputVal = val;
    console.log(this.outputVal)
  }
  passUser(user: any) {
    this.selectedUser = user;
  }

}
