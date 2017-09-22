import { Directive, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appColorPicker]'
})
export class ColorPickerDirective implements AfterViewInit {
  @Input() url: string
  constructor() {

  }

  ngAfterViewInit(){

  }
}
