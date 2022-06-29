import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CastListComponent } from './cast-list/cast-list.component';
import { CreateCastComponent } from './create-cast/create-cast.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { EditCastComponent } from './edit-cast/edit-cast.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TopPurchasesComponent } from './top-purchases/top-purchases.component';

const routes: Routes = [
  {path:"", component: AdminComponent,
  children: [
    {path:"create-movie", component: CreateMovieComponent},
    {path:"movie/details/:id", component:EditMovieComponent },
    {path:"create-cast", component: CreateCastComponent},
    {path:"cast/details/:id", component: EditCastComponent},
    {path:"casts", component: CastListComponent},
    {path:"movies", component: MovieListComponent},
    {path:"top-purchases", component: TopPurchasesComponent}
  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
