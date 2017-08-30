import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunListComponent } from './fun-list/fun-list.component';
import { FunNewComponent } from './fun-new/fun-new.component';
import { FunGreenComponent } from './fun-green/fun-green.component';
import { FunToolComponent } from './fun-tool/fun-tool.component';
import { FunEssayComponent } from './fun-essay/fun-essay.component';
import { RegComponent } from './reg/reg.component';
import { HostComponent } from './host/host.component';
import { HostInfoComponent } from './host-info/host-info.component';
import { CertificationComponent } from './certification/certification.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { DeclarationComponent} from './common/declaration/declaration.component';
import { ToBuyComponent } from './to-buy/to-buy.component';

const _HomeModule = 'app/home/home.module#HomeModule';
const _FunDetailsModule = 'app/fun-details/fun-details.module#FunDetailsModule';

const routes: Routes = [{
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
  }, { path: 'reg',
    component: RegComponent
  },  { path: 'host/:_userId',
    component: HostComponent
  },  { path: 'host-info',
    component: HostInfoComponent
  },  { path: 'certification/:_userId',
    component: CertificationComponent
  },  { path: 'questionnaire/:_userId',
    component: QuestionnaireComponent
  },  { path: 'declaration/:_id',
    component: DeclarationComponent
  },  { path: 'toBuy',
    component: ToBuyComponent
  },  {
  path: 'details/:_fundId',
  loadChildren: _FunDetailsModule
  }, {
  path: '',
  loadChildren: _HomeModule
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
