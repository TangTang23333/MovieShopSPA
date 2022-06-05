import { identifierName } from '@angular/compiler';
import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-movie-card-brief',
  templateUrl: './movie-card-brief.component.html',
  styleUrls: ['./movie-card-brief.component.css']
})
export class MovieCardBriefComponent implements OnInit {
  @Input() title = "";
  @Input() posterURL = "";
  @Input() id! : number;
  @Input() price = 9.9;
  @Output() updateId = new EventEmitter();
  constructor(private userService : UserService) { }

  ngOnInit(): void {
   
  }

  
  addToFavorite() {
    var favorite =  { movieId: this.id};
    this.userService.createUserFavorite(favorite).subscribe();
  }

  addToCart() {
    var item =  { movieId: this.id };
    this.userService.addItemToCart(item).subscribe();  
  }

  

}


