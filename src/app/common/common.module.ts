import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [MenuItemComponent],
  exports: [MenuItemComponent]
})
export class CommonModule {}
