import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ReviewModel } from 'src/app/Core/Models/ReviewModel';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-user-review-card',
  templateUrl: './user-review-card.component.html',
  styleUrls: ['./user-review-card.component.css']
})
export class UserReviewCardComponent implements OnInit {
  @Input() title = "";
  @Input() posterURL = "";
  @Input() movieId = 0;
  @Input() rating = 0;
  @Input() reviewText = "";
  @Output() removeItemEvent = new EventEmitter<number>();
  @Output() editItemEvent = new EventEmitter<number>();
  model = {} as ReviewModel;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.model = {movieId: this.movieId,
      reviewText: this.reviewText,
      rating: this.rating 
    } as ReviewModel; 
  }

  editReview(){
    console.log(this.model);
    this.userService.updateUserReview(this.model)
    .subscribe(res => {
      if (res) {
        this.editItemEvent.emit(this.movieId);
      }
    });
  }
    
  


  removeReview(){
console.log({movieId: this.movieId});
    this.userService.deleteUserReview({movieId: this.movieId}).subscribe(
      res => {
        if (res) {
          this.removeItemEvent.emit(this.movieId);
        }
      }
    
    );

  }

}
