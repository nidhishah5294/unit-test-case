import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TemplateDrivenFormComponent } from './template-driven-form.component';

describe('TemplateDrivenFormComponent', () => {
  let component: TemplateDrivenFormComponent;
  let fixture: ComponentFixture<TemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDrivenFormComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[emai check-invalid] - should check email field is not valid', waitForAsync(() => {
    fixture.whenStable().then(() => {
      //template driven form use tepmlates ,and it binding bit later ,so for handling asyncronous use async and whenstable
      let email = component.forgotForm.form.controls['email'];
      expect(email.valid).toBeFalsy();
      expect(component.forgotForm.invalid).toBeTruthy();
      email.setValue('ghh');
      expect(email.errors?.email).toBeTruthy();
    })
  }));

  it('[email check -valid]-should check email field is not valid', waitForAsync(() => {
    fixture.whenStable().then(() => {
      let email = component.forgotForm.form.controls['useremail'];
      email.setValue('abc@rrr.com');
      expect(email.valid).toBeTruthy();
      expect(component.forgotForm.valid).toBeTruthy();
    })
  }))

  it('[form -submitted] - should check form is submitted successfully', waitForAsync(() => {
    fixture.whenStable().then(() => {
      let email = component.forgotForm.form.controls['useremail'];
      email.setValue('abc@ff.com');
      component.submitForm();
      fixture.detectChanges();
      let successMsg = fixture.debugElement.query(By.css('#success-msg')).nativeElement.innerText;
      expect(successMsg).toBe(component.message);
    })
  }))
});
