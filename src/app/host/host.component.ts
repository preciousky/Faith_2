import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {
  favFunds: Array<any>;
  ownedData: Array<any>;
  tradeData: Array<any>;
  user;
  constructor(public router: Router ) { }

  ngOnInit() {

    this.user = {
      username: null,
      realname: null,
      userId: -1,
      isAuth: false,
      phone: null,
      email: null,
      address: null,
      bankname: null,
      bankarea: null,
      bankcardNo: null,
      savings: null,
      totalAsset: null,
      totalProfit: null,
      ownedFunds: null,
    };
    // TODO set info by Http
    this.setUserInfo();
    // TODO delete these data for test
    this.favFunds = [
      // tslint:disable-next-line:max-line-length
      { name: '基金名称', id: 0, info: 'Loremilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commolentesque pharetra.' },
      { name: '基金名称', id: 0, info: 'Loremilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commolentesque pharetra.' },
      { name: '基金名称', id: 0, info: 'Loremilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commolentesque pharetra.' },
      { name: '基金名称', id: 0, info: 'Loremilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commolentesque pharetra.' },
    ];
    this.ownedData = [
      {
        name: 'tom', age: '12', address: 'ssdut'
      }, {
        name: 'tom', age: '12', address: 'ssdut'
      }, {
        name: 'tom', age: '12', address: 'ssdut'
      }, {
        name: 'tom', age: '12', address: 'ssdut'
      }
    ];
    this.tradeData = [
      {
        name: 'tom', age: '12', address: 'ssdut'
      }, {
        name: 'tom', age: '12', address: 'ssdut'
      }, {
        name: 'tom', age: '12', address: 'ssdut'
      }, {
        name: 'tom', age: '12', address: 'ssdut'
      }
    ];
    this.user.isAuth = false;
  }
  toHostInfo() {
    // TODO route the data needed in host-info page
    // TODO update the testData
    this.router.navigate(['/host-info', {
      'userId' : 'testuserId',      // this.user.userId
      'username': 'testusername',      // this.user.....
      'phone': 'testphone',      // this.user.....
      'email': 'testemail',      // this.user.....
      'realname': 'testrealname',      // this.user.....
      'isAuth': 'false',      // this.user.....
      'address': 'testaddress',      // this.user.....
      'bankname': 'testbankname',      // this.user.....
      'bankarea': 'testbankarea',      // this.user.....
      'bankcardNo': 'testbankcardNo',      // this.user.....
    }]);
  }
  setUserInfo() {
    // TODO HTTP for userInfo
  }

  toCertificate() {
    this.router.navigate(['/certification', this.user.userId]);
  }
}
