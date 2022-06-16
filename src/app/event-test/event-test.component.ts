import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-test',
  templateUrl: './event-test.component.html',
  styleUrls: ['./event-test.component.scss']
})
export class EventTestComponent implements OnInit {
  countClicks: number =0;
  constructor() { }
  addClick(){
    this.countClicks++;
  }
  removeClick(){
    this.countClicks--;

  }
  ngOnInit(): void {
  }

}
