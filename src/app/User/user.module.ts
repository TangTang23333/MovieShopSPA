import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPayPalModule } from 'ngx-paypal';
import { UserRoutingModule } from './user-routing.module';
import { PurchasesComponent } from './purchases/purchases.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { UserComponent } from './user.component';
import { SharedModule } from '../Shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { FormsModule, NgForm } from '@angular/forms';


@NgModule({
  declarations: [
    PurchasesComponent,
    FavoritesComponent,
    ProfileComponent,
    ReviewsComponent,
    UserComponent,
    CartComponent
    

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    NgxPayPalModule,
    FormsModule
  ]
})
export class UserModule { }
