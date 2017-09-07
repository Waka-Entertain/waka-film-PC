import { ElementRef } from '@angular/core';
export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  adult: string;
  backdrop_path: string;
  genre_ids: string[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ScrollRegisterConfig {
  container: ContainerRef;
  throttleType: string;
  throttleDuration: number;
  filterBefore: Function;
  mergeMap: Function;
  scrollHandler: Function;
  distance: number;
}

export type ContainerRef = Window | ElementRef | any;

export interface PositionStats {
  height: number;
  scrolledUntilNow: number;
  totalToScroll: number;
}
