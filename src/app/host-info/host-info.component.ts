import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.changed = false;
    this.user = {
      username: '-1',
      phone: '-1',
      email: '-1'
    };
    this.newUser =  {
      username: '-1',
      phone: '-1',
      email: '-1'
    };
    this.userInputState = {
      username: 'out',
      phone: 'out',
      email: 'out'
    };
    this.user.username = this.route.params['value'].username;
  }

  confirm(code: string) {
    this.userInputState.username = 'out';
    this.userInputState.phone = 'out';
    this.userInputState.email = 'out';
    this.changed = false;
    if (code === '1') {
      this.user.username = this.newUser.username;
      this.user.email = this.newUser.email;
      // TODO set the information to server
    }
  }
}
