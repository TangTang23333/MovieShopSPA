import { Component, OnInit } from '@angular/core';
import { ReviewModel, UserReviewModel } from 'src/app/Core/Models/ReviewModel';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews = [] as UserReviewModel[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserAllReviews().subscribe(res => this.reviews = res);
  }

  removeReview(id: number){
    this.userService.getUserAllReviews().subscribe(res => {
      this.reviews = res;
      console.log(res);
    })
  }

  editReview(id: number) {
    this.userService.getUserAllReviews().subscribe(res => {
      this.reviews = res;
      console.log(res);
    })
  }


}
