import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteDetailComponent } from './core/favorites/favorite-detail/favorite-detail.component';
import { FavoritesComponent } from './core/favorites/favorites.component';
import { HomeDetailComponent } from './core/home/home-detail/home-detail.component';
import { HomeComponent } from './core/home/home.component';
import { SearchDetailComponent } from './core/search/search-detail/search-detail.component';
import { SearchComponent } from './core/search/search.component';
import { TopMoviesDetailComponent } from './core/top-movies/top-movies-detail/top-movies-detail.component';
import { TopMoviesComponent } from './core/top-movies/top-movies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie-detail/:id', component: HomeDetailComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'favorites/movie-detail/:id', component: FavoriteDetailComponent },
  { path: 'moviesTop', component: TopMoviesComponent },
  { path: 'moviesTop/movie-detail/:id', component: TopMoviesDetailComponent },
  { path: 'search/:text', component: SearchComponent },
  { path: 'search/:text/movie-detail/:id', component: SearchDetailComponent },
  /* {path: '**', component: NotFoundComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
