import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { DetailService } from '../detail.service';
import { ColorPickerDirective } from '../directive/color-picker.directive';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DetailComponent, ColorPickerDirective],
  exports: [DetailComponent],
  providers: [DetailService]
})
export class DetailModule {
 }
