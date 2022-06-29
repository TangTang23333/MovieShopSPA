import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input'
import { AdminRoutingModule } from './admin-routing.module';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { AdminComponent } from './admin.component';
import { CreateCastComponent } from './create-cast/create-cast.component';
import { AccountRoutingModule } from '../Account/account-routing.module';
import { CastListComponent } from './cast-list/cast-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { EditCastComponent } from './edit-cast/edit-cast.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    CreateMovieComponent,
    AdminComponent,
    CreateCastComponent,
    CastListComponent,
    MovieListComponent,
    EditMovieComponent,
    EditCastComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatInputModule,
    NgSelectModule
    
  ]
})
export class AdminModule { }
