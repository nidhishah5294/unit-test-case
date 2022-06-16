import { Component, DebugElement, SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DummyComponent } from '../dummy/dummy.component';

import { LifeCycleHookComponent } from './life-cycle-hook.component';

describe('LifeCycleHookComponent', () => {
  let component: LifeCycleHookComponent;
  let fixture: ComponentFixture<LifeCycleHookComponent>;
  let de: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeCycleHookComponent, DummyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleHookComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();//oninit executed
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should test the execution of the oninit hook', () => {
    expect(component.message).toContain('OnInit  Executed:-');//part of msg
  })

  fit('should test the manual execution of the oninit hook', () => {
    component.message = 'dummy value';
    component.ngOnInit();
    expect(component.message).toContain('OnInit  Executed:-dummy value');
    fixture.detectChanges();
    expect(de.nativeElement.querySelector('#oninit').textContent).toBe('OnInit  Executed:-dummy value');

  })
  fit('it should test manual execution of onchanges', () => {
    component.username = 'RudraTech';
    component.ngOnChanges({
      username: new SimpleChange(null, component.username, true)
    });
    fixture.detectChanges();
    expect(de.nativeElement.querySelector('#changeId').textContent).toBe('Username:RudraTech registered')
  })
  fit('should test execution of onChanges', () => {
    let dummyFixture = TestBed.createComponent(DummyComponent);
    let dummyComponent = dummyFixture.componentInstance;
    let de = dummyFixture.debugElement;
    dummyComponent.username = 'TechRudra.2014';
    dummyFixture.detectChanges();
    expect(de.nativeElement.querySelector('#changeId').textContent).toBe('Username:TechRudra.2014 registered')
  })
});



// @Component({
//   selector: 'dummy-component',
//   template: '<life-cycle-hook [username]="username"></life-cycle-hook>',
//   styleUrls: ['./life-cycle-hook.component.css']
// })
// export class DummyComponent {
//   username!: string;
// }