import { Component, OnInit } from '@angular/core';
import { ReviewModel } from 'src/app/Core/Models/ReviewModel';
import { MovieService } from 'src/app/Core/Services/movie.service';
import { UserService } from 'src/app/Core/Services/user.service';
import {MovieDetailModel} from '../../Core/Models/MovieDetailModel';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id: number = 0;
  movie = {} as MovieDetailModel;
  isPurchased = false;
  isFavorite = false;
  year = ""; //this.movie.releaseDate.substring(0, 10);
  model = {} as ReviewModel;
  constructor(private userService : UserService, private movieService : MovieService) { }
  
  ngOnInit(): void {
    console.log("inside movie details init method");
    const url = window.location.href;
    this.id =  parseInt(url.split('/')[5]);
    this.movieService.getMovieDetailsById(this.id).subscribe(res => {
      this.movie = res;
      this.year = res.releaseDate.substring(0, 10);});
      
    this.userService.isMoviePurchased(this.id).subscribe(res => this.isPurchased = res);
    this.userService.isMovieFavorite(this.id).subscribe(res => this.isFavorite = res);
    
    this.userService.getUserMovieReview(this.id).subscribe(res => this.model = res);
  }

  addToFavorite(){
    var favorite =  { movieId: this.id};
    this.userService.createUserFavorite(favorite).subscribe(
      res => {
        if (res) {
          this.isFavorite = res;
        }
      }
    );
  }


  removeFromFavorite(){
    this.userService.deleteUserFavorite({movieId: this.id}).subscribe((res)=>{
      if (res) {
        this.isFavorite = !res;
      }
    }); 
  }

  editReview(){
    this.model.movieId = this.id;
    this.userService.updateUserReview(this.model).subscribe();
  }
  }
