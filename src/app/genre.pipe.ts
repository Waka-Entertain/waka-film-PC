import { Pipe, PipeTransform } from '@angular/core';
import { DiscoverService } from './discover.service';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {
  constructor(private discoverService: DiscoverService) {}
  transform(value: number, args?: any): any {
    return this.discoverService.generList[value];
  }
}
