import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { FootComponent } from './common/foot/foot.component';
import { NavComponent } from './common/nav/nav.component';


import { HomeModule } from './home/home.module';
import { FunDetailsModule } from './fun-details/fun-details.module';
import { FcardModule } from './common/fcard/fcard.module';

import { LoginModalComponent } from './common/login-modal/login-modal.component';
import { FunListComponent } from './fun-list/fun-list.component';
import { FnewComponent } from './common/fnew/fnew.component';
import { FunNewComponent } from './fun-new/fun-new.component';
import { FunGreenComponent } from './fun-green/fun-green.component';
import { FunToolComponent } from './fun-tool/fun-tool.component';
import { FunEssayComponent } from './fun-essay/fun-essay.component';

import { FunEssayService } from './fun-essay/fun-essay.service';
import { ServiceService } from './service/service.service';
import { EchartDirective } from './directive/echart/echart.directive';
import {HttpPostService} from './service/http-post.service';

@NgModule({
  declarations: [
    AppComponent,
    FootComponent,
    NavComponent,
    LoginModalComponent,
    FunListComponent,
    FnewComponent,
    FunNewComponent,
    FunGreenComponent,
    FunToolComponent,
    FunEssayComponent
  ],
  entryComponents: [
    LoginModalComponent,
    FnewComponent,
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    FunDetailsModule,
    FcardModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule
  ],
  providers: [FunEssayService, ServiceService, HttpPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
