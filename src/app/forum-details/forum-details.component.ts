import { Component, OnInit } from '@angular/core';
import {FunEssayService} from '../fun-essay/fun-essay.service';
import {ActivatedRoute} from '@angular/router';
import {HttpPostService} from '../service/http-post.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';


interface Essay {
  title?: string;
  author?: string;
  from?: string;
  update?: string;
  cont?: string;
  star?: string;
}
@Component({
  selector: 'forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.scss']
})
export class ForumDetailsComponent implements OnInit {
  essay: Essay;
  essayId;
  _current: number;
  _total: number;
  _dataSet: Array<any>;
  _loading: boolean;
  _pageSize: number;
  validateForm: FormGroup;

  constructor(
    public FunEssayService: FunEssayService,
    private route: ActivatedRoute,
    private httpPostService: HttpPostService,
    private fb: FormBuilder
  ) {
    this.essay = {};
    this._current = 1;
    this._total = 1;
    this._dataSet = [];
    this._loading = true;
    this._pageSize = 10;
    this.validateForm = this.fb.group({
      comment : [ '', [ Validators.required ] ]
    });
}
  ngOnInit() {
    this._refreshData();
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
  _refreshData = () => {
    this._loading = true;
    const body = JSON.stringify({
      // TODO load data
      page_no: this._current,
      page_size: this._pageSize
    });
    // this.httpPostService.getReponseData(this._current, this._pageSize, 'get-fund-list')
    this.httpPostService.getReponseTestDataByPost('get-comments', body)
      .subscribe(data => {
        const d = data.json();
        this._dataSet = d.comments;
        this._total = d.log_num;
        this._loading = false;
      });
  }
  submitForm = (value) => {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsDirty();
    }
    console.log(value);
  }

    getFormControl(name) {
      return this.validateForm.controls[ name ];
    }
}
