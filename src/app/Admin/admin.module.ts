import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { AdminComponent } from './admin.component';
import { CreateCastComponent } from './create-cast/create-cast.component';
import { AccountRoutingModule } from '../Account/account-routing.module';


@NgModule({
  declarations: [
    CreateMovieComponent,
    AdminComponent,
    CreateCastComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    
  ]
})
export class AdminModule { }
