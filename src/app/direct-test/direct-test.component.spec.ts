import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { EnclosePipe } from '../enclose.pipe';
import { HelloDirective } from '../hello.directive';

import { DirectTestComponent } from './direct-test.component';

describe('DirectTestComponent', () => {
  let component: DirectTestComponent;
  let fixture: ComponentFixture<DirectTestComponent>;
  let debugElement: DebugElement;
  let pipe: EnclosePipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectTestComponent, HelloDirective],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pipe = new EnclosePipe();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should test the directive for its changes to div', () => {
    component.username = 'rudra';
    let btn = debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    let div = debugElement.query(By.css('#customDiv'));
    expect(div.nativeElement.innerText).toContain('Hello Rudra');
    expect(div.nativeElement.style.backgroundColor).toBe('green');
    div.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(div.nativeElement.style.backgroundColor).toBe('orange');
    expect(div.nativeElement.style.fontSize).toBe('28px');
  })

  //pipe test cases
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  })

  it('parameter is passed = should test pipe with parameter', () => {
    expect(pipe.transform('sample test', 'curly')).toBe('{sample test}');
  })

  it('parameter is not passes = should test pipe with parameter', () => {
    expect(pipe.transform('sample test').toBe('(sample test)'));
  })
});
