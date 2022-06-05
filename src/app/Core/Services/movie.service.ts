import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  MovieCardModel
} from '../Models/MovieCardModel';
import { MovieDetailModel } from '../Models/MovieDetailModel';
import { PageOfMoviesModel } from '../Models/PageOfMoviesModel';

import {ReviewModel} from '../Models/ReviewModel';

@Injectable({
  providedIn: 'root'
})

// this service can be injected in component 
export class MovieService {


  constructor(private http: HttpClient) {}

  readonly baseURL = environment.API_URL;
  getTop30GrossingMovies(): Observable < MovieCardModel[] > {
    return this.http.get<MovieCardModel[]>(this.baseURL + "/movies/top-grossing");
  }

  getMovieDetailsById(id: number) : Observable < MovieDetailModel > {
    return this.http.get<MovieDetailModel>(this.baseURL + `/movies/${id}`)
  }

  getTopRatedMovies() : Observable < MovieCardModel[] >{
    return this.http.get<any>(this.baseURL + "/movies/top-rated")
  }

  getMoviesByGenre(genreId: number, pageNumber:number = 1) : Observable < PageOfMoviesModel> {
    return this.http.get<PageOfMoviesModel>(this.baseURL + `/Movies/genre/${genreId}/${pageNumber}`);
  }

  getReviewsByMovie(id: number) : Observable < ReviewModel[]> {
    return this.http.get < ReviewModel[] > (this.baseURL + `/movies/${id}/reviews`);
  }

  searchMovieByKeyword(keyword: string) : Observable < MovieCardModel[] >{
    return this.http.get<MovieCardModel[]>(this.baseURL +  `/Movies/filter/${keyword}`);
  }
}
