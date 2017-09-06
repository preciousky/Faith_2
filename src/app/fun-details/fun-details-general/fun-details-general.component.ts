import { Component, OnInit } from '@angular/core';
import {HttpPostService} from '../../service/http-post.service';
@Component({
  selector: 'fun-details-general',
  templateUrl: './fun-details-general.component.html',
  styleUrls: ['./fun-details-general.component.scss']
})
export class FunDetailsGeneralComponent implements OnInit {
  data;
  constructor( public httpPostService: HttpPostService) {
   }
  ngOnInit() {
    this.onTest();
  }
  onTest(){
    // 完成 fund 信息的赋值
    const body =JSON.stringify({
      num:6,
    });
   // this.httpPostService.getReponseData('table',body)
    this.httpPostService.getReponseTestDataByPost('table', body)
      .subscribe(data => {
        const d = data.json();
        this.data =d;
        alert('赋值正常了');
      // TODO success
      }, error => {
      // TODO fail
       alert('http失败');
    });
  }

  
}

