import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  popular: [];
  page_size: number = 20;
  page_number: number = 1;

  ngOnInit() {
    this.getPopular();
  }

  lessMovies() {
    console.log(this.page_number);
    if (this.page_number <= 1) {
      this.page_number = 1;
    } else {
      this.page_number = this.page_number - 1;
    }

    this.getPopular();
  }
  moreMovies() {
    // De esta manera solo veremos las 100 primeras películas
    console.log(this.page_number);
    if (this.page_number >= 5) {
      this.page_number = 5;
    } else {
      this.page_number = this.page_number + 1;
    }

    // De esta manera podemos ver el catálogo completo
    /*  this.page_number = this.page_number + 1; */

    this.getPopular();
  }

  getPopular() {
    let page = this.page_number;
    this.movieService.getPopularMovie(page).subscribe((data) => {
      this.popular = data.results;
    });
  }
}
