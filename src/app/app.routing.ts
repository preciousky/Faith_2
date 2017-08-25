import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunDetailsComponent } from './fun-details/fun-details.component';
import { FunListComponent } from './fun-list/fun-list.component';
import { FunNewComponent } from './fun-new/fun-new.component';
import { FunGreenComponent } from './fun-green/fun-green.component';
import { FunToolComponent } from './fun-tool/fun-tool.component';
import { FunEssayComponent } from './fun-essay/fun-essay.component';

const _HomeModule = './home/home.module#HomeModule';
const _FunDetailsModule = './fun-details/fun-details.module#FunDetailsModule';

const routes: Routes = [
 {
    path: '',
    loadChildren: _HomeModule
  }, {
    path: 'details',
    loadChildren: _FunDetailsModule
  }, {
    path: 'funlist/:_name',
    component: FunListComponent
  }, {
    path: 'funnew/:_name',
    component: FunNewComponent
  }, {
    path: 'fungreen/:_name',
    component: FunGreenComponent
  }, {
    path: 'funtool',
    component: FunToolComponent
  }, {
    path: 'funeassay/:_id',
    component: FunEssayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
