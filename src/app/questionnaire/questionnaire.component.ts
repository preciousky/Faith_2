import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpPostService} from '../service/http-post.service';

@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questionnaireForm: FormGroup;
  userId;
  constructor(private fb: FormBuilder, public router: Router, public httpPostService: HttpPostService) {
  }

  ngOnInit() {
    this.questionnaireForm = this.fb.group({
      q1 : [ 1 ],
      q2 : [ 1 ],
      q3 : [ 1 ],
      q4 : [ 1 ],
      q5 : [ 1 ],
      q6 : [ 1 ],
      q7 : [ 1 ],
      q8 : [ 1 ],
      q9 : [ 1 ],
      q10 : [ 1 ],
      q11 : [ 1 ],
      q12 : [ 1 ],
      q13 : [ 1 ],
      q14 : [ 1 ],
      q15 : [ 1 ],
      q16 : [ 1 ],
      q17 : [ 1 ],
      q18 : [ 1 ],
    });
  }

  finishQuestions() {
    alert('注册结束\n你可以登入平台')
    this.router.navigate(['/']);
  }
}
