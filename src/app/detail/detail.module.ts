import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { DetailService } from '../detail.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DetailComponent],
  exports: [DetailComponent],
  providers: [DetailService]
})
export class DetailModule { }
