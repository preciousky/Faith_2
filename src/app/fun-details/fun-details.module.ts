import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FunDetailsComponent } from './fun-details.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FunDetailsRoute } from './fun-details.routing';
import { EchartDirective } from '../directive/echart/echart.directive';
import { FunDetailsMainComponent } from './fun-details-main/fun-details-main.component';
import {HttpPostService} from '../service/http-post.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    FunDetailsComponent,
    EchartDirective,
    FunDetailsMainComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(FunDetailsRoute),
    NgZorroAntdModule,
    HttpModule
  ],
  providers: [
    HttpPostService
  ]
})
export class FunDetailsModule { }
