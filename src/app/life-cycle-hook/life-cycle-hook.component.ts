import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.scss']
})
export class LifeCycleHookComponent implements OnInit, OnChanges {
  message!: string;
  @Input() username!: string;
  displayMsg!: string;

  constructor() { }

  ngOnInit(): void {
    this.message = 'OnInit  Executed:-' + this.message;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['username']) {
      console.log(changes['username'])
      this.displayMsg = 'Username:' + this.username + ' registered';
    }
    console.log(changes['username'])
  }


}
