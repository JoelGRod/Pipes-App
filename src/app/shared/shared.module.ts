import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { MenuComponent } from './menu/menu.component';
// Modules
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule
  ]
})
export class SharedModule { }
