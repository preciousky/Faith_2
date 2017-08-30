import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
@Component({
  selector: 'to-buy',
  templateUrl: './to-buy.component.html',
  styleUrls: ['./to-buy.component.scss']
})
export class ToBuyComponent implements OnInit {
  toBuyForm: FormGroup;
  current: number;
  userId;
  fundId;
  fundName;
  expense;
  fee;
  constructor(public route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.current = 0;
    this.userId = this.route.params['value'].userId;
    this.fundId = this.route.params['value'].fundId;
    this.fundName = this.route.params['value'].fundName;
    this.toBuyForm = this.fb.group({
      agree: false,
      input_number   : [ 4 ],
      radio_button   : [ 1 ]
    });
  }

}
