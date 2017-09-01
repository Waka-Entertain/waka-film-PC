import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [MenuItemComponent],
  exports: [MenuItemComponent]
})
export class CommonModule {}
