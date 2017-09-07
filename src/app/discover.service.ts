import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Genre } from './discover/interface';
import config from '../config';
const { discoverMovie, generList } = config.api;

@Injectable()
export class DiscoverService {
  generList: string[];
  constructor(private http: Http) {
    this.__generList()
      .then(i => i.genres)
      .then(this.__unflatten)
      .then(i => (this.generList = i));
  }

  discoverMovieByPopularity(params: params) {
    return this.http
      .get(discoverMovie, { params: { api_key: config.apiKey, ...params } })
      .toPromise()
      .then(res => res.json());
  }
  private __generList() {
    return this.http
      .get(generList, { params: { api_key: config.apiKey } })
      .toPromise()
      .then(res => res.json());
  }
  private __unflatten(arr: Genre[]): string[] {
    let result = [];
    for (let i of arr) {
      result[i.id] = i.name;
    }
    return result;
  }
}

interface params {
  language?: language;
  page?: number;
  region?: string;
}
enum language {
  'en-US',
  'zh-cn'
}
