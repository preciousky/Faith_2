import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  RegForm: FormGroup;

  _submitForm() {
    for (const i in this.RegForm.controls) {
      this.RegForm.controls[ i ].markAsDirty();
    }
  }

  constructor(private fb: FormBuilder) {
  }

  // updateConfirmValidator() {
  //   /** wait for refresh value */
  //   setTimeout(_ => {
  //     this.RegForm.controls[ 'checkPassword' ].updateValueAndValidity();
  //   });
  // }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.RegForm.controls[ 'password' ].value) {
      return { confirm: true, error: true };
    }
  }

  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }

  ngOnInit() {
    this.RegForm = this.fb.group({
      phone          : [ null, [ Validators.required ] ],
      password         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      // TODO set a way to make sure you are a human
      // captcha          : [ null, [ Validators.required ] ],
      captcha          : [ null ],
      agree            : [ false ]
    });
  }

  getFormControl(name) {
    return this.RegForm.controls[name];
  }
}
