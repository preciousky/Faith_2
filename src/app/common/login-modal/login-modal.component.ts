import { Component, OnInit, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {HttpPostService} from '../../service/http-post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  LoginForm: FormGroup;
  username: string;
  user_id: number;
  constructor(
    private fb: FormBuilder,
    private subject: NzModalSubject,
    private httpPostService: HttpPostService,
    public router: Router
  ) {
    this.subject.on('onDestory', () => {
      console.log('destroy');
    });
  }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      username: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
     // remember: [ true ],
    });
    this.username = null;
    this.user_id = -1;
  }

  toLogin() {
    // TODO delete it later
    this.router.navigate(['/host', '10']);

    for (const i in this.LoginForm.controls) {
      this.LoginForm.controls[i].markAsDirty();
    }
    if (!this.LoginForm.controls['username'].hasError('required') && !this.LoginForm.controls['password'].hasError('required')) {
      const body = JSON.stringify({
        username: this.LoginForm.value.username,
        password: this.LoginForm.value.password
      });
      console.log(body);

    // TODO set a url to server
    this.httpPostService.getReponseData('/api/login', body).subscribe(data => {
        this.subject.next({code: 1, user_id: data.json().user_id, username: this.username});
        this.subject.destroy('onCancel');
      },
      error => {
        this.subject.next({code: -1, user_id: -1, username: 'Mr.error'});
      });
    }
  }

  toReg() {
    this.router.navigate(['/reg']);
    this.subject.destroy('onCancel');
  }


}
