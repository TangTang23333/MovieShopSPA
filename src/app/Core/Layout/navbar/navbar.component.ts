import {
  Component,
  OnInit
} from '@angular/core';
import {
  GenreModel
} from '../../Models/GenreModel';
import {
  AccountService
} from '../../Services/account.service';
import {
  GenreService
} from '../../Services/genre.service';
import {
  AuthGuard
} from '../../Guards/auth.guard';
import {
  TokenModel
} from '../../Models/TokenModel';
import {
  UserService
} from '../../Services/user.service';
import {
  CartModel
} from '../../Models/CartModel';
import {
  MovieService
} from '../../Services/movie.service';
import {
  MovieCardModel
} from '../../Models/MovieCardModel';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Route,
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import {
  ThisReceiver
} from '@angular/compiler';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  genres!: GenreModel[];
  cartCount = 0;
  filteredMovies!: MovieCardModel[];
  keyword = "";
  isLoggedIn = false;
  currentUser = {} as TokenModel;


  constructor(private genreService: GenreService,
    private userService: UserService,
    private accountService: AccountService,
    private movieService: MovieService,
    private router: Router) {
    // here is how to subscribe to observables 
    this.accountService.isLoggedIn.subscribe(res => this.isLoggedIn = res);
    this.accountService.currentUser.subscribe(res => this.currentUser = res);
    this.userService.cartNb.subscribe(res => this.cartCount = res);


  }






  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(g => {
      this.genres = g;
      console.log("genres:", g);
    });
    //this.userService.cartNb.subscribe(res => this.cartCount = res);
    //this.userService.getUserCart().subscribe(res => this.userService.cartNbSubject.next(res.length));

  }

  logOut() {
    this.accountService.logOut();
    this.router.navigateByUrl('/account/login');
  }

  searchMovies() {
    this.router.navigateByUrl(`movies/filter/${this.keyword}`);
  }

}
