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
  fundDetails;
  fundDetailsExpense;
  fundDetailsForms;
  fundDetailsGeneral;
  netValueLine;
  belongings;
  productions;
  raisePercentagesLine;
  constructor(public router:Router, private route: ActivatedRoute, public httpPostService: HttpPostService, public echartsService: EchartsService ) {

  this.fundDetails = {
      id: -1,
      name: null,
      raise_percentages: [null, null, null, null],
      profit_rates:  [null, null, null, null],
      dates:  [null, null, null, null],
      netvalues:  [null, null, null, null]
    };
  // 需要传递给自子组件的三组参数
  this.fundDetailsGeneral = {};
  this.fundDetailsForms = {};
  this.fundDetailsExpense = {};
  }

  ngOnInit() {
    this.getFundID();
    this.getFundDetails();

  }
  getFundDetails() {
    // 完成 fund 信息的赋值
    const body = JSON.stringify({
      fund_id : this.fundDetails.id
    });
    this.httpPostService.getReponseData('url', body).subscribe(data => {
      this.fundDetails = data.json();
    }, error => {
      this.httpPostService.getReponsTestDataByGet('mock-data/get-fund-detail-mock.json')
        .subscribe(data => {
          this.fundDetails = data.json();
          console.log(data);
          console.log(this.fundDetails);
          this.setCharts();

        } );
      // alert('http失败,已经使用虚拟数据');
    } );
    // this.router.navigate(['/host', { id: userID}]);
  }

  getFundID() {
    // 接收路由传参
    this.route.params.subscribe(params => {
      this.fundDetails.id = params['_fundId'];
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
    this.echartsService.emitEchart('netValueLine', this.netValueLine);
    this.echartsService.emitEchart('netValueLine2', this.netValueLine);
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
            data : ['date1', 'date2', 'date3', 'date4']
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
            data: [200, -170, 240, 244]
          },
        ]
      };
    this.echartsService.emitEchart('raisePercentagesLine', this.raisePercentagesLine);
  }
  toBuy() {
    this.router.navigate(['/toBuy', {userId: 1, fundId: 1, fundName: 'testfundname'}]);
  }
}
