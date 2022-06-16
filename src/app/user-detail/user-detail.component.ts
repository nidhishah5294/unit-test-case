import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';




@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})


export class UserDetailComponent implements OnInit {

  private _setUser!: User;
  username!: string;
  age!: number;
  userid!: number;
  @Input('selUser') set setUser(user: any) {
    if (user !== null && user !== undefined) {
      this.username = user.name;
      this.userid = user.id;
      this.age = user.age;
    }
  }

  @Output() updateUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  saveUser() {
    let userDetail = new User();
    userDetail.name = this.username;
    userDetail.age = this.age;
    userDetail.id = this.userid;
    this.updateUser.emit(userDetail);

    this.username = '';
    this.userid = 0;
    this.age = 0;

  }


}
