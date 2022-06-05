import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { MoviesComponent } from './movies.component';
import { MoviesGenreComponent } from './movies-genre/movies-genre.component';
import { SharedModule } from '../Shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MoviesKeywordComponent } from './movies-keyword/movies-keyword.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovieDetailsComponent,
    CastDetailsComponent,
    MoviesComponent,
    MoviesGenreComponent,
    MoviesKeywordComponent

    
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class MoviesModule { }
