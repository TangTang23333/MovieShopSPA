import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardBriefComponent } from './movie-card-brief/movie-card-brief.component';
import { MovieCardFavoriteComponent } from './movie-card-favorite/movie-card-favorite.component';
import { MovieCardPurchaseComponent } from './movie-card-purchase/movie-card-purchase.component';
import { UserReviewCardComponent } from './user-review-card/user-review-card.component';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    MovieCardBriefComponent,
    MovieCardFavoriteComponent,
    MovieCardPurchaseComponent,
    UserReviewCardComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    MovieCardBriefComponent,
    MovieCardFavoriteComponent,
    MovieCardPurchaseComponent,
    UserReviewCardComponent, 
  ]
})
export class SharedModule { }
