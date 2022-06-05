import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { UserComponent } from './user.component';

const routes: Routes = [

  {path:"", component: UserComponent, 
  children: [
    {path:"purchases", component: PurchasesComponent},
    {path:"favorites", component: FavoritesComponent},
    {path:"reviews", component: ReviewsComponent},
    {path:"profile", component: ProfileComponent},
    {path:"cart", component: CartComponent},

    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
