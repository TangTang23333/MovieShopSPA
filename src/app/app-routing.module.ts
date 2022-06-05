import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Core/Guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [


  // home route
  {path:"", component: HomeComponent},
  // lazy load public module only when the route contains movies in it 
  {path:"movies",  loadChildren:() => import("./Public/movies.module").then(mod => mod.MoviesModule)},
  // put filter/guard for filtering accesss to this module
  {path:"user", loadChildren:() => import("./User/user.module").then(mod => mod.UserModule), canActivate: [AuthGuard]},
  {path:"account",   loadChildren:() => import("./Account/account.module").then(mod => mod.AccountModule)},
  // put filter for this full module 
  {path:"admin",   loadChildren:() => import("./Admin/admin.module").then(mod => mod.AdminModule)},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
