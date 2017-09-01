import { Component, OnInit, Input } from '@angular/core';
import { menuItem } from './interface';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() items: menuItem[];
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
