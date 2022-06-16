import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('forgotForm', { static: true }) forgotForm!: NgForm;
  message!: string;
  useremail!: string;
  constructor() { }

  ngOnInit(): void {
    this.message = '';
  }
  submitForm() {
    if (this.forgotForm.valid) {
      this.message = 'Email sent for password reset!';
      this.useremail = '';
      this.forgotForm.reset();
    }

  }

}
