import { Component, OnInit } from '@angular/core';
import { menuItem } from '../common/menu-item/interface';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: menuItem[];
  constructor() {
    this.menu = [
      { icon: '#icon-jitui', title: 'Playing', url: '/playing' },
      { icon: '#icon-xiangji', title: 'Discover', url: '/discover' },
      { icon: '#icon-guozhi', title: 'Activity', url: '/activity' },
      { icon: '#icon-pijiu', title: 'TopCharts', url: '/topcharts' }
    ];
  }

  ngOnInit() {}
}
