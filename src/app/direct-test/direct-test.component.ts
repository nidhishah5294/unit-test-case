import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-test',
  templateUrl: './direct-test.component.html',
  styleUrls: ['./direct-test.component.scss']
})
export class DirectTestComponent implements OnInit {
  username:any;
  isClicked:any;
  constructor() { }

  ngOnInit(): void {
  }

}
