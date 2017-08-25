import { Component, OnInit, Input } from '@angular/core';
import { FunEssayService } from './fun-essay.service';


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
  @Input() essayId: number;
  constructor(
    public FunEssayService: FunEssayService
  ) {
    this.essay = {};
  }
  ngOnInit() {
    this._init();
  }

  _init(_id?: number): void {
    this.FunEssayService.getEssayById(_id)
      .subscribe(data => {
        console.log(data);
        this.essay = data;
      });
  }
}
