import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss'],
})
export class TopMoviesComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  movies = [];
  page: number;
  totalPages: number;
  totalResults: number;

  ngOnInit() {
    this.searchTopMovies();
  }

  searchTopMovies() {
    this.movieService.searchTopMovies(this.page).subscribe((data) => {
      this.movies = data.results;
      this.page = data.page;
      this.totalPages = data.total_pages;
      this.totalResults = data.total_results;
    });
  }

  loadMore() {
    this.movieService.searchTopMovies(this.page + 1).subscribe((data) => {
      this.movies = this.movies.concat(data.results);
      this.page = data.page;
      this.totalPages = data.total_pages;
      this.totalResults = data.total_results;
    });
  }
}
