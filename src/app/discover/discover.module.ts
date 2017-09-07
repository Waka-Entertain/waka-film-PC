import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverComponent } from './discover.component';
import { DiscoverService } from '../discover.service';
import { GenrePipe } from '../genre.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [DiscoverComponent, GenrePipe],
  providers: [DiscoverService]
})
export class DiscoverModule {}
