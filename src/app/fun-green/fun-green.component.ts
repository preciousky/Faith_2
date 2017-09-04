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
        info: '金融、优势、发展前景等问题进行了激烈的观点交流和思维碰撞，诚为行业顶级盛会。',
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
