import { Component, Input, OnInit } from '@angular/core';
import { MovieCardModel } from 'src/app/Core/Models/MovieCardModel';
import { MovieService } from 'src/app/Core/Services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-keyword',
  templateUrl: './movies-keyword.component.html',
  styleUrls: ['./movies-keyword.component.css']
})
export class MoviesKeywordComponent implements OnInit {
  
  filteredMovies!: MovieCardModel[];
  keyword!: string;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.keyword = this.route.snapshot.url[1].path;
    console.log("check path", this.route.snapshot.url[1].path);
    this.movieService.searchMovieByKeyword(this.keyword).subscribe(res=>{
      this.filteredMovies = res;
    })

    console.log(this.filteredMovies);
  }

   
  

  

}
