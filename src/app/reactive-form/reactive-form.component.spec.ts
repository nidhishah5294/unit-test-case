import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ReactiveFormComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveFormComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[email check] should check user email address is invalid', () => {
    let email = component.loginForm.controls.useremail
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors?.required).toBeTruthy();
    email.setValue('abc');
    expect(email.errors?.email).toBeTruthy();
  })

  it('[email] shold check correct email address pattern', () => {
    let email = component.loginForm.controls.useremail;
    email.setValue('abc@ff.com');
    expect(email.errors).toBeNull();
  })

  it('[password check] should check psw is invalid', () => {
    let password = component.loginForm.controls.userpassword;
    expect(password.errors?.required).toBeTruthy();
    password.setValue('nih');
    expect(password.errors?.minLength).toBeTruthy();
  })

  it('[passwoed check] check pswd validity', () => {
    let password = component.loginForm.controls.userpassword;
    password.setValue('111111');
    expect(password.errors).toBeNull();
  })

  it('[for check] should check form is valid or not when [no value is entered]', () => {
    //no value is enter
    expect(component.loginForm.valid).toBeFalsy();
  })

  it('[for check] should check form is valid or not when [value is entered]', () => {
    component.loginForm.controls['useremail'].setValue('abc@gmail.com');
    component.loginForm.controls['userpassword'].setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('[Form submit] - Should check form is submitted', () => {
    //check form is in valid
    expect(component.loginForm.invalid).toBeTruthy();
    let btn = fixture.debugElement.query(By.css('input[type=submit]'));
    //button disabled
    expect(btn.nativeElement.disabled).toBeTruthy();

    component.loginForm.controls['username'].setValue('abc@gg.com');
    component.loginForm.controls['userpassword'].setValue('123456');
    fixture.detectChanges();
    //button is enabled
    expect(btn.nativeElement.disabled).toBeFalsy();
    component.submitLoginForm();
    fixture.detectChanges();

    let successDiv = fixture.debugElement.query(By.css('#success-message')).nativeElement.innerText;
    expect(successDiv).toBe('Form submitted successfully');


  })
});
