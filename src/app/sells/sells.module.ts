// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
// Components
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
// Pipes
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';



@NgModule({
  declarations: [
    NumbersComponent, 
    NoCommonComponent, 
    BasicsComponent, 
    OrderComponent,
    UppercasePipe,
    FlyPipe,
    OrderPipe
  ],
  exports: [
    NumbersComponent, 
    NoCommonComponent, 
    BasicsComponent, 
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SellsModule { }
