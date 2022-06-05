import { Component, OnInit } from '@angular/core';
import { FavoriteModel } from 'src/app/Core/Models/FavoriteCardModel';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites : FavoriteModel[] = []
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUserFavorites().subscribe( res => this.favorites = res);
     
  }


  removeFavorite(id: number) {
    console.log(id);
    this.userService.getUserFavorites().subscribe( res => {
      this.favorites = res;
    console.log('inside parent component remove method:', res);
  });
  }

  

  

}
