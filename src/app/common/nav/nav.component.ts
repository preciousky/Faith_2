import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';

import { LoginModalComponent } from '../login-modal/login-modal.component';
import {assertNotNull} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'common-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  username: string;
  userId: number;
  searchForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private modalService: NzModalService,
  ) { }

  ngOnInit() {
    this.username = 'initial';
    this.userId = -1;
    this.searchForm = this.fb.group({
      search: ['', [ Validators.required ]]
    });
  }
  _submitSearch() {
    console.log(this.searchForm.value);
  }

  showLoginModal() {
    const subscription = this.modalService.open({
      title: '登录',
      content: LoginModalComponent,
      footer: false
    });
    subscription.subscribe(result => {
      console.log(result);
      if ( result['code'] && result['code'] === 1) {
        console.log('登录成功 nav拿到user_id为' + result['user_id'] + '  username为' + result['username']);
      }else
      if ( result['code'] && result['code'] === -1) {
        console.log('http失败 nav拿到user_id为' + result['user_id']+ + '  username为' + result['username']);

        // TODO delete it 模拟登陆成功
        this.userId = 12;
        this.username = result['username'];
      }

    });
  }
}
