import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieCardModel } from '../Core/Models/MovieCardModel';
import { MovieService } from '../Core/Services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   movies!: MovieCardModel[];
   constructor(
     private movieService: MovieService) {
       
     }
   ngOnInit(): void {
     console.log("inside the ng init method");
    // angular life cycle hook method
    // until you subscribe to an observable its not gonna be executed 
    // execute the moviecard observable to real data 
    this.movieService.getTop30GrossingMovies().subscribe(m => {
      this.movies = m;
    });
   }

}
