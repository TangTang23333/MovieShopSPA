import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenreModel } from '../Models/GenreModel';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }
  readonly baseURL = environment.API_URL;
  


  getAllGenres(): Observable<GenreModel[]>{
    return this.http.get<GenreModel[]>(this.baseURL +'/genres');
  }
}
