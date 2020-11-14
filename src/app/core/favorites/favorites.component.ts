import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorits: any;

  constructor() {}

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.favorits = JSON.parse(localStorage.getItem('favorites'));
    if (!this.favorits) {
      this.favorits = [];
    }
  }
}
