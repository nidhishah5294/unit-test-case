import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AfterContentChildComponent } from '../after-content-child/after-content-child.component';

import { AfterContentParentComponent } from './after-content-parent.component';

describe('AfterContentParentComponent', () => {
  let component: AfterContentParentComponent;
  let fixture: ComponentFixture<AfterContentParentComponent>;
  let childFixture: ComponentFixture<AfterContentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfterContentParentComponent, AfterContentChildComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterContentParentComponent);
    component = fixture.componentInstance;
    childFixture = TestBed.createComponent(AfterContentChildComponent);
    component.contentChild = childFixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('ng after content init and checked executed', () => {
    fixture.detectChanges();
    expect(component.initMsg).toContain('AfterContentInit Executed - ');
    component.contentChild.curentValue = 'test data';
    fixture.detectChanges();
    expect(component.checkedMsg).toContain('Previous value - undefiend, Current value = test Data');
  })
  fit('ng after content init and checked executed Mannualy', () => {
    component.ngAfterContentInit();
    expect(component.initMsg).toContain('AfterContentInit Executed - ');
    component.contentChild.curentValue = 'test data';
    component.ngAfterContentChecked();
    expect(component.checkedMsg).toContain('Previous value - undefiend, Current value = test Data');

  })
});
