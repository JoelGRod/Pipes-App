import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BasicsComponent } from './sells/pages/basics/basics.component';
import { NumbersComponent } from './sells/pages/numbers/numbers.component';
import { NoCommonComponent } from './sells/pages/no-common/no-common.component';
import { OrderComponent } from './sells/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'no-common',
    component: NoCommonComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
