import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Observable} from 'rxjs'
import 'rxjs/add/operator/switchMap';
import {Detail } from './interface'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detail$:Observable<Detail>
  constructor(private detailService: DetailService, private route: ActivatedRoute) {
    this.detail$ = this.route.paramMap.switchMap((params: ParamMap) => this.detailService.movieDetail(params.get('movieId')))
    this.detail$.subscribe(console.log.bind(console))
    this.route.paramMap.subscribe(console.log.bind(console))
  }

  ngOnInit() {

  }

}
