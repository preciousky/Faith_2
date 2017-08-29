import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'host-info',
  templateUrl: './host-info.component.html',
  styleUrls: ['./host-info.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(-2000px)'})),
      transition('out => in', [

        animate(100)
      ]),
      transition('in => out', [
        animate(100, style({transform: 'translateX(1000px)'}))
      ])
    ])
  ]
})
export class HostInfoComponent implements OnInit {
  user;
  newUser;
  userInputState;
  changed: boolean;
  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.user = {
      username: '-1',
      phone: '-1',
      email: '-1',
      realname: '-1',
      address: '-1',
      bankname: '-1',
      bankarea: '-1',
      bankcardNo: '-1',

      isAuth: false,
      userId: '-1',
    };
    this.newUser =  {
      phone: '-1',
      email: '-1',
      address: '-1',
    };
    this.userInputState = {
      username: 'out',
      phone: 'out',
      email: 'out',
      realname: 'out',
      address: 'out',
      bankname: 'out',
      bankarea: 'out',
      bankcardNo: 'out'
    };
    this.changed = false;
    // fetch the data routed,set it in Object user(do not have all info for a user,only these needed in this page
    {
      this.user.userId = this.route.params['value'].userId;
      this.user.isAuth = (this.route.params['value'].isAuth === 'true') ? true : false;

      this.user.username = this.route.params['value'].username;
      this.user.phone = this.route.params['value'].phone;
      this.user.email = this.route.params['value'].email;
      this.user.realname = this.route.params['value'].realname;
      this.user.address = this.route.params['value'].address;
      this.user.bankname = this.route.params['value'].bankname;
      this.user.bankarea = this.route.params['value'].bankarea;
      this.user.bankcardNo = this.route.params['value'].bankcardNo;
    }
  }

  confirm(code: string) {
    this.userInputState.phone = 'out';
    this.userInputState.email = 'out';
    this.userInputState.address = 'out';
    this.changed = false;
    if (code === '1') {
      this.user.phone = this.newUser.phone;
      this.user.email = this.newUser.email;
      this.user.address = this.newUser.address;

      // TODO set the information to server
    }
  }

  toCertificate() {
    this.router.navigate(['/certification', this.user.userId]);
  }
}
