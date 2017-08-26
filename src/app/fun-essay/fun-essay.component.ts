import { Component, OnInit, Input } from '@angular/core';
import { FunEssayService } from './fun-essay.service';
import {ActivatedRoute, Params} from '@angular/router';


interface Essay {
  title?: string;
  author?: string;
  from?: string;
  update?: string;
  cont?: string;
}
@Component({
  selector: 'fun-essay',
  templateUrl: './fun-essay.component.html',
  styleUrls: ['./fun-essay.component.scss']
})
export class FunEssayComponent implements OnInit {
  essay: Essay;
  essayId;
  constructor(
    public FunEssayService: FunEssayService,
    private route: ActivatedRoute
  ) {
    this.essay = {};
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.essayId = params['_id'];
    });
    this._init(this.essayId);
    console.log(this.essayId);
  }

  _init(_id?: number): void {
    this.FunEssayService.getEssayById(_id)
      .subscribe(data => {
        console.log(data);
        this.essay = data;
      });
  }
}
