import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  fNewList: Array<Object>;
  constructor(
    public router: Router
  ) {
    this.fNewList = [];
  }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.fNewList.push({
        id: i,
        title: '论坛文章测试',
        info: '的热中国公募基金行准行了激烈的观点交流和思维碰撞，诚为行业顶级盛会。',
        date: '2017-08-28'
      });
    }
  }

  scorllById(_id) {
    document.getElementById(_id).scrollIntoView();
  }

  toEdit() {
    this.router.navigate(['/edit']);
  }

}
