import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-movie-card-favorite',
  templateUrl: './movie-card-favorite.component.html',
  styleUrls: ['./movie-card-favorite.component.css']
})
export class MovieCardFavoriteComponent implements OnInit {
  @Input() title = "";
  @Input() posterURL = "";
  @Input() id = 0;
  @Input() price = null;

  // EventEmitter means that it is an event 
  // new EventEmitter<string>() - 
  // create a new eventEmitter，sends out string type。
  @Output() removeItemEvent = new EventEmitter<number>();
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }


  removeFavorite() {
    this.userService.deleteUserFavorite({movieId: this.id}).subscribe((res)=>{
      if (res) {
        this.removeItemEvent.emit(this.id);
      }
    }); 
  }

  addToCart() {
    this.userService.addItemToCart( { movieId: this.id }).subscribe();  
    this.removeFavorite();
  }
}
