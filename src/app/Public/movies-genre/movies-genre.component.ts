import { Component, OnInit } from '@angular/core';
import { PageOfMoviesModel } from 'src/app/Core/Models/PageOfMoviesModel';
import { MovieService } from 'src/app/Core/Services/movie.service';

@Component({
  selector: 'app-moives-genre',
  templateUrl: './movies-genre.component.html',
  styleUrls: ['./movies-genre.component.css']
})
export class MoviesGenreComponent implements OnInit {
  pageOfMovies = {} as PageOfMoviesModel;
  constructor(private movieService : MovieService) { }
  genreId = parseInt(window.location.href.split('/')[5]);
  ngOnInit(): void {
    

    if( window.location.href.split('/').length > 6) 
    { 
      var pageNumber = parseInt(window.location.href.split('/')[6]);
    } else {
      var pageNumber = 1;
    }

    this.movieService.getMoviesByGenre(this.genreId, pageNumber).subscribe(res => this.pageOfMovies = res);
  } 


  getPage(pageNumber: number) {
    this.movieService.getMoviesByGenre(this.genreId, pageNumber).subscribe(res => this.pageOfMovies = res);
  }


}
