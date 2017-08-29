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
  isAuth;
  constructor(public router: Router ) { }

  ngOnInit() {
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
    this.isAuth = false;
  }
  toHostInfo() {
    this.router.navigate(['/host-info', {
      'username': 'testusername',
      'phone': 'testphone',
      'email': 'testemail'
    }]);
  }

}
