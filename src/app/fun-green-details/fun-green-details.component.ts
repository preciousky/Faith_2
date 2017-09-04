import { Component, OnInit } from '@angular/core';
import {FunEssayService} from '../fun-essay/fun-essay.service';
import {ActivatedRoute} from '@angular/router';
interface Essay {
  title?: string;
  author?: string;
  from?: string;
  update?: string;
  cont?: string;
}
@Component({
  selector: 'fun-green-details',
  templateUrl: './fun-green-details.component.html',
  styleUrls: ['./fun-green-details.component.scss']
})
export class FunGreenDetailsComponent implements OnInit {
  essay: Essay;
  essayId;
  constructor(public FunEssayService: FunEssayService,
  private route: ActivatedRoute) {
    this.essay = {}; }

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
