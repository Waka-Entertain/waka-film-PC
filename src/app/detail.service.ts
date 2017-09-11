import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import config from '../config';
const { movieDetailUrl } = config.api;
@Injectable()
export class DetailService {
  constructor(private http: Http) {}
  movieDetail(id:string) {
    return this.http.get(movieDetailUrl + '/' + id,{params:{api_key:config.apiKey}}).toPromise()
      .then(res => res.json());
  }
}
