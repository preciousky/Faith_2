import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';

import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'common-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  searchForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private modalService: NzModalService,
  ) { }

  ngOnInit() {
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
    });
  }
}
