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
      { icon: '#icon-jitui', title: 'Playing', url: '/app/playing' },
      { icon: '#icon-xiangji', title: 'Discover', url: '/app/discover' },
      { icon: '#icon-guozhi', title: 'Activity', url: '/app/activity' },
      { icon: '#icon-pijiu', title: 'TopCharts', url: '/app/topcharts' }
    ];
  }

  ngOnInit() {}
}
