import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesGenreComponent } from './movies-genre/movies-genre.component';
import { MoviesComponent } from './movies.component';
import { MoviesKeywordComponent } from './movies-keyword/movies-keyword.component';
const routes: Routes = [

  {path:"", component: MoviesComponent,
  children: [
    {path:"details/:id", component: MovieDetailsComponent},
    {path:"genre/:id/:pageNumber", component: MoviesGenreComponent},
    {path:"genre/:id", component: MoviesGenreComponent},
    {path:"cast/details/:id", component: CastDetailsComponent},
    {path:"filter/:keyword", component: MoviesKeywordComponent}]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
