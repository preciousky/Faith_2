import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  Article: Array<Object>;
  constructor(
    private actRoute: ActivatedRoute
  ) {
    this.Article = [];
  }

  ngOnInit() {
    this.getRouteHref();
    for (let i = 0; i < 3; i++) {
      this.Article.push({
        id: i,
        title: '世界尽头与冷酷仙境',
        info: '电梯以十分缓慢的速度继续上升。大概是在上升，我想。不过我没有把握。其速度实在过于缓慢，以致我失去了方向感。或许下降也未可知，抑或不上不下也不一定。我只不过斟酌前后情况而姑且算它上升罢了。仅仅是推测，无半点根据。也可能上至十二楼下到第三楼—绕地球一周又返回原处。总之无从知晓。',
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
