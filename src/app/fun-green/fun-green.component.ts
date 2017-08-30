import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fun-green',
  templateUrl: './fun-green.component.html',
  styleUrls: ['./fun-green.component.scss']
})
export class FunGreenComponent implements OnInit {
  fNewList: Array<Object>;
  constructor(
    private actRoute: ActivatedRoute
  ) {
    this.fNewList = [];
  }

  ngOnInit() {
    this.getRouteHref();
    for (let i = 0; i < 3; i++) {
      this.fNewList.push({
        id: i,
        title: '大资管 2.0 时代到来 公募 FOF 成未来创新中坚力量',
        info: '金融界网站7月27日讯 公募FOF步伐渐行渐近。作为业内具有划时代意义的大事件，公募FOF的到来持续引发市场各方的热切关注。7月27日下午，继北京之后，由金融界联合南方基金、招商基金、广发基金、鹏华基金、中邮基金、融通基金、民生加银、前海开源基金等38家公募基金公司共同举办的“智领未来.FOF开启基金投资新时代暨2017年全球资产配置与风险管理研讨会”在深圳成功举行。本次会议群贤毕至、盛况空前，与会嘉宾就中国公募基金行业发展趋势、FOF的准备工作、优势、发展前景等问题进行了激烈的观点交流和思维碰撞，诚为行业顶级盛会。',
        from: '西安电子科技大学'
      });
    }
  }

  private getRouteHref() {
    return this.actRoute.params.subscribe(params => {
      this.scorllById(params._name);
    });
  }

  scorllById(_id) {
    document.getElementById(_id).scrollIntoView();
  }

}
