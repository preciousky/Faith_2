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
  pieChart = {
    theme: '',
    event: [
      {
        type: 'click',
        cb: function (res) {
          console.log(res);
        }
      }
    ],
    title: {
      text: 'NiceFish访问用户地区分布',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['深圳', '北京', '广州', '上海', '长沙']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      startAngle: -180,
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 3350,
        name: '深圳'
      }, {
        value: 310,
        name: '北京'
      }, {
        value: 234,
        name: '广州'
      }, {
        value: 135,
        name: '上海'
      }, {
        value: 1548,
        name: '长沙'
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
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
