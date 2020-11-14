import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-top-movies-detail',
  templateUrl: './top-movies-detail.component.html',
  styleUrls: ['./top-movies-detail.component.scss'],
})
export class TopMoviesDetailComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  detail: {};

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.movieService
      .getMovieDetail(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.detail = data;
      });
  }
}
