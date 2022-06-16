import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'unitTestKArmaJAsmin';
  employee = 'employee'
  ngOnInit(): void {
    let arr = [3, 5, 6, 7, 8, 9];
    console.log(arr.filter(this.filterValue));
    console.log(arr.filter(this.findEventIndex));

  }


  public findEventIndex(pValue: any) {
    return pValue % 2 === 0;

  }
  public filterValue(numValue: any) {
    return numValue > 5;
  }
}
