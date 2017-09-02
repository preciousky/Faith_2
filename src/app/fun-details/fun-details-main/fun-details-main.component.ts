import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpPostService} from '../../service/http-post.service';
import {EchartsService} from '../../service/echarts.service';

@Component({
  selector: 'fun-details-main',
  templateUrl: './fun-details-main.component.html',
  styleUrls: ['./fun-details-main.component.scss']
})
export class FunDetailsMainComponent implements OnInit {
  // some Objects
  fundDetails;
  // echarts options
  netValueLine;
  belongings;
  productions;
  raisePercentagesLine;
  // something alone without Object
  fundId;
  netValue;
  raiPer;
  // remote loading
  log;
  constructor(public router: Router,
              private route: ActivatedRoute,
              public httpPostService: HttpPostService,
              public echartsService: EchartsService) {
    this.log = {
      _current: 1,
      _total: 1,
      _dataSet: [],
      _loading: true,
      _pageSize: 4
    }
    this.fundDetails = {};
  }

  ngOnInit() {
    this.getFundID();
    this.getFundDetails();
    this._refreshData();
  }
  getFundDetails() {
    // 完成 fund 信息的赋值
    const body = JSON.stringify({
      fund_id : this.fundId
    });
    // TODO update here
    // this.httpPostService.getReponseData('get-fund-detail', body)
    this.httpPostService.getReponseTestDataByPost('get-fund-detail', body)
      .subscribe(data => {
        const d = data.json();
        this.fundDetails = d;
        console.log(this.fundDetails);
        this.netValue = this.fundDetails.netvalues[3];
        this.raiPer = this.fundDetails.raise_percentages[3];
        this.setCharts();
        // TODO success
      }, error => {
        // TODO fail
        // alert('http失败');
      } );
  }
  getFundID() {
    // 接收路由传参
    this.route.params.subscribe(params => {
      this.fundId = params['_fundId'];
      console.log(this.fundDetails.id);
    });
  }
  setCharts() {
    this.netValueLine = {
      title : {
        text: '基金净值走势',
        left: '50%',
        textAlign: 'center',
      },
      tooltip : {
        trigger: 'axis'
      },
      calculable : true,
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : this.fundDetails.dates
        }
      ],
      yAxis : [
        {
          type : 'value',
          axisLabel : {
            formatter: '{value}￥'
          }
        }
      ],
      series : [
        {
          itemStyle : { normal: {label : {show: true}}},
          name: '单位净值',
          type: 'line',
          data: this.fundDetails.netvalues
        }
      ]
    };
    this.echartsService.emitEchart('net1', this.netValueLine);
    this.echartsService.emitEchart('net2', this.netValueLine);
    this.belongings = {
      title: {
        text: '资产配置',
        left: '50%',
        textAlign: 'center',
      },
      series: [

        {
          label: {
            normal: {
              show: true,
              position: 'outside',
              formatter: '{b} : {c} ({d}%)'

            }
          },

          type:'pie',
          radius: ['20%', '55%'],

          data: this.fundDetails.asset_allocation
          //   [
          //   {value:335, name:'直达'},
          //   {value:310, name:'邮件营销'},
          //   {value:234, name:'联盟广告'},
          //   {value:135, name:'视频广告'},
          //   {value:1048, name:'百度'},
          //   {value:251, name:'谷歌'},
          //   {value:147, name:'必应'},
          //   {value:102, name:'其他'}
          // ]
        }
      ]
    };
    this.echartsService.emitEchart('belongings', this.belongings);
    this.productions = {
      title: {
        text: '产业配置',
        left: '50%',
        textAlign: 'center',
      },
      series: [

        {
          label: {
            normal: {
              show: true,
              position: 'outside',
              formatter: '{b} : {c} ({d}%)'

            }
          },
          type:'pie',
          radius: ['20%', '55%'],

          data: this.fundDetails.industry_allocation
        }
      ]
    };
    this.echartsService.emitEchart('productions', this.productions);
    this.raisePercentagesLine = {
      title: {
        text:'基金涨跌幅',
        left: '50%',
        textAlign: 'center',
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      yAxis : [
        {
          type : 'value'
        }
      ],
      xAxis : [
        {
          type : 'category',
          axisTick : {show: false},
          data : this.fundDetails.dates
        }
      ],
      series : [
        {
          name: '涨跌幅',
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          },
          data: this.fundDetails.raise_percentages
        },
      ]
    };
    this.echartsService.emitEchart('raisePercentagesLine', this.raisePercentagesLine);
  }
  toBuy() {
    this.router.navigate(['/toBuy', {userId: 1, fundId: 1, fundName: 'testfundname'}]);
  }
  _refreshData = () => {
    this.log._loading = true;
    const body = JSON.stringify({
      page_no: this.log._current,
      page_size: this.log._pageSize,
    });
    // this.httpPostService.getReponseData(this._current, this._pageSize, 'netvalue-log')
    this.httpPostService.getReponseTestDataByPost('netvalue-log', body)
      .subscribe(data => {
      const d = data.json();
        this.log._dataSet = d.netvalues_log;
        this.log._total = d.log_num;
        this.log._loading = false;
    });
  }
}
