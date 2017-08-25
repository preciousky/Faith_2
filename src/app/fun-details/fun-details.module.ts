import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FunDetailsComponent } from './fun-details.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FunDetailsRoute } from './fun-details.routing';
import { FunDetailsLeftComponent } from './fun-details-left/fun-details-left.component';
import { EchartDirective } from '../directive/echart/echart.directive';

@NgModule({
  declarations: [
    FunDetailsComponent,
    FunDetailsLeftComponent,
    EchartDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(FunDetailsRoute),
    NgZorroAntdModule
  ],
})
export class FunDetailsModule { }
