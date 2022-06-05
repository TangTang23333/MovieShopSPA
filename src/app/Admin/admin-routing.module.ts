import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateCastComponent } from './create-cast/create-cast.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { TopPurchasesComponent } from './top-purchases/top-purchases.component';

const routes: Routes = [
  {path:"", component: AdminComponent,
  children: [
    {path:"admin/create-movie", component: CreateMovieComponent},
    {path:"cast/details/:id", component: TopPurchasesComponent},
    {path:"admin/create-cast", component: CreateCastComponent}
  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
