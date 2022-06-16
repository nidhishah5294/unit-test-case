import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective implements OnInit {
  @Input('userinfo') username!: string;
  @HostBinding('style.background-color') backgroundColor!: string;
  @HostBinding('style.font-size') fontSize!: string;
  @HostBinding('innerHTML') innerHTML!: string;

  constructor() { }
  ngOnInit(): void {
    this.innerHTML = 'Hello' + this.username;
    this.fontSize = '18px';
    this.backgroundColor = 'green';
  }

  @HostListener('mouseover') onMouseOver() {
    this.fontSize = '28px';
    this.backgroundColor = 'orange'
  }

  @HostListener('mouseout') onMouseout() {
    this.backgroundColor = 'green';
    this.fontSize = '18px';

  }
}
