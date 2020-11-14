import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
  url: string = 'https://api.themoviedb.org/3';
  api: string = '?api_key=351dc53738000f3a9f297dc2e8b0dbe7';
  es: string = '&language=es-ES';
  sort: string = '&sort_by=popularity.desc';
  keanu: string = '&&with_people=6384';
  year: string = '&primary_release_year=2019';
  vote: string = '&vote_average.gte=4';

  constructor(private http: HttpClient) {}

  // Obtenemos conjunto de peliculas
  getPopularMovie(page): Observable<any> {
    return this.http.get(
      `${this.url}/movie/popular${this.api}${this.es}&page=${page}`
    );
  }

  // Obtenemos el detalle de una pelicula según su ID
  getMovieDetail(movie_id): Observable<any> {
    return this.http.get(`${this.url}/movie/${movie_id}${this.api}${this.es}`);
  }

  // Obtenemos el resultado de la busqueda por parametro
  searchMovies(query, page?): Observable<any> {
    let params = new HttpParams();
    params = params.append('query', query);
    if (page) {
      params = params.append('page', page);
    }
    return this.http.get(`${this.url}/search/movie${this.api}${this.es}`, {
      params: params,
    });
  }

  // Obtenemos el resultado de la busqueda de películas Top
  searchTopMovies(page?): Observable<any> {
    return this.http.get(
      `${this.url}/discover/movie${this.api}${this.es}${this.sort}&page=${page}${this.year}${this.vote}${this.keanu}`
    );
  }
}
