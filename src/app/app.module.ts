// Importación de Angular
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Importación de Core
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { HomeDetailComponent } from './core/home/home-detail/home-detail.component';

// Importación de componentes
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FavoritesComponent } from './core/favorites/favorites.component';
import { FavoriteDetailComponent } from './core/favorites/favorite-detail/favorite-detail.component';
import { SearchComponent } from './core/search/search.component';
import { SearchDetailComponent } from './core/search/search-detail/search-detail.component';

// Importación de Servicios
import { MovieService } from './services/movie.service';
import { TopMoviesComponent } from './core/top-movies/top-movies.component';
import { TopMoviesDetailComponent } from './core/top-movies/top-movies-detail/top-movies-detail.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeDetailComponent,
    MovieComponent,
    MovieDetailsComponent,
    FavoritesComponent,
    FavoriteDetailComponent,
    SearchComponent,
    SearchDetailComponent,
    TopMoviesComponent,
    TopMoviesDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
