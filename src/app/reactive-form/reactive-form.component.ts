import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  loginForm!: FormGroup;
  message!: string;

  constructor() {
    this.loginForm = new FormGroup({
      useremail: new FormControl('', [Validators.required, Validators.email]),
      userpassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
  }

  submitLoginForm() {
    if (this.loginForm.valid) {
      this.message = 'Form submitted successfully';
    } 
  }

}
