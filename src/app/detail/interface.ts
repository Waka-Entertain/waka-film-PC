export interface Detail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompany>;
  production_countries: Array<ProductionCountry>;
  spoken_languages: Array<Language>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number
}
interface Genre {
  id: number;
  name: string
}
interface ProductionCompany {
  id: number;
  name: string
}
interface ProductionCountry {
  iso_3166_1: string;
  name: string
}
interface Language {
  iso_639_1: string;
  name: string;
}
