import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpPostService} from '../../service/http-post.service';
interface ShowFundDetails {
  id: number;
  name: string;
  raisePercentages: number[];
  profitRate: number[];
  date: any[];
  netValue: number[];
  // ... ...
}
@Component({
  selector: 'fun-details-main',
  templateUrl: './fun-details-main.component.html',
  styleUrls: ['./fun-details-main.component.scss']
})
export class FunDetailsMainComponent implements OnInit {
  fund: ShowFundDetails;
  fundId: number;
  netValueLine = {
    title : {
      text: '基金净值走势'
    },
    tooltip : {
      trigger: 'axis'
    },
    calculable : true,
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['周一','周二','周三','周四','周五','周六','周日']
      }
    ],
    yAxis : [
      {
        type : 'value',
        axisLabel : {
          formatter: '{value} °C'
        }
      }
    ],
    series : [
      {
        itemStyle : { normal: {label : {show: true}}},
        name: '最高气温',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10],
      }
    ]
  };
  belongings = {
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

        data:[
          {value:335, name:'直达'},
          {value:310, name:'邮件营销'},
          {value:234, name:'联盟广告'},
          {value:135, name:'视频广告'},
          {value:1048, name:'百度'},
          {value:251, name:'谷歌'},
          {value:147, name:'必应'},
          {value:102, name:'其他'}
        ]
      }
    ]
  };
  productions = {
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

        data:[
          {value:335, name:'直达'},
          {value:310, name:'邮件营销'},
          {value:234, name:'联盟广告'},
          {value:135, name:'视频广告'},
          {value:1048, name:'百度'},
          {value:251, name:'谷歌'},
          {value:147, name:'必应'},
          {value:102, name:'其他'}
        ]
      }
    ]
  };
  constructor(private route: ActivatedRoute,
               public httpPostService: HttpPostService ) {
    this.fund = {
      id: -1,
      name: '测试基金',
      raisePercentages: null,
      profitRate: null,
      date: null,
      netValue: null,
    };
  }

  ngOnInit() {
    this.getFundID();
    this.getFundDetails();
  }

  getFundDetails() {
    // 完成 fund 信息的赋值
    // import {Headers, Http, RequestOptions} from '@angular/http';
    // public http: Http
    const body = JSON.stringify({
      fund_id : this.fund.id
    });
    this.httpPostService.getReponseData('url', body).subscribe(data => {
      console.log('response:');
      this.fund = data.json();
      console.log(this.fund);
    }, error => {
      alert('http失败');
    } );
    // this.router.navigate(['/host', { id: userID}]);
  }


  getFundID() {
    // 接收路由传参
    this.route.params.subscribe(params => {
      this.fund.id = params['_fundId'];
      console.log(this.fund.id);
    });
  }

}
