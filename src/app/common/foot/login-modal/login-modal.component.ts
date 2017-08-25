import { Component, OnInit, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  LoginForm: FormGroup;

  emitDataOutside(event) {
    console.log(event);
    console.log(this.LoginForm.value);
    this.subject.next('success');
  }

  handleCancel(e) {
    this.subject.destroy('onCancel');
  }
  constructor(
    private fb: FormBuilder,
    private subject: NzModalSubject
  ) {
    this.subject.on('onDestory', () => {
      console.log('destroy');
    });
  }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }

}
