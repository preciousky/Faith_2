import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpPostService} from '../service/http-post.service';
@Component({
  selector: 'host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {
  favFunds: Array<any>;
  userId;
  user;
  fav: Array<any>;
  o_current = 1;
  o_total = 1;
  o_dataSet = [];
  o_loading = true;
  o_pageSize = 5;
  t_current = 1;
  t_total = 1;
  t_dataSet = [];
  t_loading = true;
  t_pageSize = 10;

  constructor(public router: Router,
              private httpPostService: HttpPostService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this._orefreshData();
    this._trefreshData();
    this.userId = -1;
    this.getUserId();
    this.user = {
      is_auth: false,
      savings: null,
      total_asset: null,
      total_profit: null,
      funds_netvalue: null,
      favorite: null
    };
    this.setUserInfo();
  }
  setUserInfo() {
    // TODO HTTP for userInfo
    const body = JSON.stringify({
      // TODO load data
      'user_id': this.userId
    });
    // TODO update here
    // this.httpPostService.getReponseData('get-user-assets-info', body)
    this.httpPostService.getReponseTestDataByPost('get-user-assets-info', body)
      .subscribe(data => {
        const d = data.json();
        this.user = d.user;
        this.fav = d.user.favorite;
        console.log(this.user);
      }, error => {
        // TODO fail
      } );
  }
  toHostInfo() {
    this.router.navigate(['/host-info', this.userId.toString()]);
  }
  toCertificate() {
    this.router.navigate(['/certification', this.userId]);
  }
  toDetails(fundId: number) {
    this.router.navigate(['/details', fundId]);
  }
  getUserId() {
    this.route.params.subscribe(param => {
      this.userId = param['_userId'];
    });
    console.log('userId:' + this.userId );
  }
  _trefreshData = () => {
    this.o_loading = true;
    const body = JSON.stringify({
      page_no: this.t_current,
      page_size: this.t_pageSize,
      user_id: this.userId
    });
    // this.httpPostService.getReponseData(this._current, this._pageSize, 'netvalue-log')
    this.httpPostService.getReponseTestDataByPost('get-user-trade-log', body)
      .subscribe((tdata: any) => {
        const td = tdata.json();
        this.t_dataSet = td.trade_log;
        this.t_total = td.log_num;
        this.t_loading = false;
      });
  }
  _orefreshData = () => {
    this.o_loading = true;
    const body = JSON.stringify({
      page_no: this.o_current,
      page_size: this.o_pageSize,
      user_id: this.userId
    });
    // this.httpPostService.getReponseData(this._current, this._pageSize, 'netvalue-log')
    this.httpPostService.getReponseTestDataByPost('get-user-owned-fund', body)
      .subscribe((odata: any) => {
        const od = odata.json();
        this.o_dataSet = od.owned_funds;
        this.o_total = od.log_num;
        this.o_loading = false;
      });
  }
}
