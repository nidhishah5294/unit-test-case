import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-content-child',
  templateUrl: './after-content-child.component.html',
  styleUrls: ['./after-content-child.component.scss']
})
export class AfterContentChildComponent implements OnInit {
  curentValue: any;
  constructor() { }

  ngOnInit(): void {
  }

}
