import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fun-details-left',
  templateUrl: './fun-details-left.component.html',
  styleUrls: ['./fun-details-left.component.scss']
})
export class FunDetailsLeftComponent implements OnInit {
  pieChart = {
    theme: '',
    event: [
      {
        type: "click",
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
      formatter: "{a} <br/>{b} : {c} ({d}%)"
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
  constructor() {
  }

  ngOnInit() {
  }


}
