import { Component, OnInit, ElementRef } from '@angular/core';
import { DiscoverService } from '../discover.service';
import { Movie } from './interface';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ScrollRegisterConfig, PositionStats } from './interface';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  animations: [
    trigger('heroState', [
      state(
        'inactive',
        style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        })
      ),
      state(
        'active',
        style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.1)'
        })
      ),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class DiscoverComponent implements OnInit {
  movies: Movie[];
  _disabled: boolean;
  options: ScrollRegisterConfig;
  lastPostion: number;
  currentPage: number;
  constructor(
    private discoverService: DiscoverService,
    private hostElement: ElementRef
  ) {
    this._disabled = false;
    this.options = {
      container: window,
      throttleType: 'throttle',
      throttleDuration: 300,
      filterBefore: () => !this._disabled,
      mergeMap: () => this.calculatePoints(this.hostElement),
      distance: 0.05,
      scrollHandler: (container: PositionStats) =>
        this.handleOnScroll(container)
    };
    this.lastPostion = 0;
    this.currentPage = 1;
    this.attachEvent(this.options);
    this.movies = [];
    this.fetchData({ page: this.currentPage });
  }

  ngOnInit() {}
  private attachEvent(options: ScrollRegisterConfig): Subscription {
    const scroller$: Subscription = Observable.fromEvent(
      options.container,
      'scroll'
    )
      [options.throttleType](() => Observable.timer(options.throttleDuration))
      .filter(options.filterBefore)
      .mergeMap((ev: any) => Observable.of(options.mergeMap(ev)))
      .subscribe(options.scrollHandler);
    return scroller$;
  }
  private calculatePoints(element: ElementRef): PositionStats {
    // container's height
    const height = this.options.container.innerHeight;
    // scrolled until now / current y point
    const scrolledUntilNow = height + window.scrollY;
    // total height / most bottom y point
    const totalToScroll = element.nativeElement.scrollHeight;
    return { height, scrolledUntilNow, totalToScroll };
  }
  private handleOnScroll(element: PositionStats) {
    if (this.shouldScroll(element)) {
      this.onScrollDown();
    }
  }
  private shouldScroll({ height, scrolledUntilNow, totalToScroll }) {
    let res: boolean;
    let isScrollDown: boolean = this.lastPostion < scrolledUntilNow;
    if (!isScrollDown) {
      res = false;
    }
    let remaining = totalToScroll - scrolledUntilNow;
    if (remaining <= totalToScroll * this.options.distance) {
      res = true;
    }
    this.lastPostion = scrolledUntilNow;
    return res;
  }
  public onScrollDown() {
    this.currentPage++;
    this.fetchData({ page: this.currentPage });
  }
  private fetchData(params) {
    this.discoverService
      .discoverMovieByPopularity(params)
      .then(data => (this.movies = [...this.movies, ...data.results]));
  }
}
