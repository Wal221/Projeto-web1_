import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaroselComponent } from './carosel.component';



@NgModule({
  declarations: [
    CaroselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CaroselComponent
  ]
})
export class CaroselModule { }
