import { Component, OnInit, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { ServiceService } from '../../service/service.service';
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

  constructor(
    private fb: FormBuilder,
    private subject: NzModalSubject,
    private ServiceService: ServiceService
  ) {
    this.subject.on('onDestory', () => {
      console.log('destroy');
    });
  }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      username: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }

  emitDataOutside(event) {
    this.ServiceService.vaildLoginHttp(this.LoginForm.value)
      .subscribe(res => {
        console.log('success');
        console.log(res);
      });
    this.subject.next('success');
  }

  handleCancel(e) {
    this.subject.destroy('onCancel');
  }

}
