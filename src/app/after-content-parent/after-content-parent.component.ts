import { AfterContentChecked, AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { AfterContentChildComponent } from '../after-content-child/after-content-child.component';

@Component({
  selector: 'app-after-content-parent',
  templateUrl: './after-content-parent.component.html',
  styleUrls: ['./after-content-parent.component.scss']
})
export class AfterContentParentComponent implements OnInit, AfterContentInit, AfterContentChecked {
  initMsg!: any;
  checkedMsg!: any;
  priviousValue!: any;
  counter: number = 0;
  @ContentChild(AfterContentChildComponent, { static: true }) contentChild!: AfterContentChildComponent;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.initMsg = '- AfterContentInit Executed - '
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.checkedMsg = `Previous value = ${this.priviousValue},current value =${this.contentChild.curentValue}`;
    if (this.priviousValue === this.contentChild.curentValue) {

    }else{
      this.priviousValue = this.contentChild.curentValue;
    }

  }

}
