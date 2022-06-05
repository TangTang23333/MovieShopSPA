import {
  HttpClient,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  BehaviorSubject,
  map,
  Observable
} from 'rxjs';
import {
  CartModel
} from '../Models/CartModel';
import {
  PurchasedModel,
  PurchaseRequestModel
} from '../Models/PurchaseCardModel';
import {
  FavoriteModel
} from '../Models/FavoriteCardModel';
import {
  UserProfileModel
} from '../Models/UserProfileModel';
import {
  ReviewModel,
  UserReviewModel
} from '../Models/ReviewModel';
import {
  environment
} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private cartNbSubject = new BehaviorSubject < number > (0);
  public cartNb = this.cartNbSubject.asObservable();
  private cartSubject = new BehaviorSubject < CartModel[] > ([]);
  public cart = this.cartSubject.asObservable();
  constructor(private http: HttpClient) {}
  readonly baseURL = environment.API_URL;

  // call api to get https://localhost:7293/api/user/purchases 
  // send the bearer token in the header
  // we can get token forl localstorage and pass it to header
  // seperate service: interceptor -> piece of logic, inspect/attach/transform information to request as payload or header

  // ======================get user profile ================================
  getUserProfile(): Observable < UserProfileModel > {
    return this.http.get < UserProfileModel > (this.baseURL + "/User/details");
  }

  updateUserProfile(user: UserProfileModel): Observable < boolean > {
    return this.http.put < boolean > (this.baseURL + "/User/details", user);
  }

  // =======================user review =========================================
  getUserAllReviews(): Observable < UserReviewModel[] > {
    return this.http.get < UserReviewModel[] > (this.baseURL + "/User/movie-reviews");
  }

  getUserMovieReview(id : number): Observable <UserReviewModel> {
    return this.http.get <UserReviewModel> (this.baseURL + `/User/movie-review/${id}`);
  }

  updateUserReview(review: ReviewModel): Observable < boolean > {
    return this.http.put < boolean > (this.baseURL + "/User/edit-review", review);
  }

  deleteUserReview(review: any): Observable < boolean > {
    return this.http.post<boolean>(this.baseURL + "/User/delete-review", review).pipe(map(
      (res:any) => {
          return res;
      }
    ))
  }

  createUserReview(review: ReviewModel): Observable < boolean > {
    return this.http.post < boolean > (this.baseURL + "/User/add-review", review);
  }



  // ===========================user purchases====================================
  getUserPurchases(): Observable < PurchasedModel[] > {
    return this.http.get < PurchasedModel[] > (this.baseURL + "/User/purchases");
  }

  // return this.http.post(this.baseURL + '/account/register', user).pipe(
  //   map((res: any) => {
  //     if (res.id > 0) {
  //       return true;
  //     }
  //     return false;
  //   }));
  getUserCart(): Observable < CartModel[] > {
    return this.http.get < CartModel[] > (this.baseURL + '/User/cart').pipe(
      map((res: any) => {
        this.cartNbSubject.next(res.length);
        this.cartSubject.next(res);
        return res;
      }));
  }

  removeItemFromCart(item: any): Observable < boolean > {
    return this.http.post < boolean > (this.baseURL + '/User/remove-from-cart', item).pipe(
      map((res: any) => {
        if (res == true) {
          this.getUserCart().subscribe();
          return true;
        }
        return false;
      }));
  }

  addItemToCart(item: any): Observable < boolean > {
    return this.http.post < boolean > (this.baseURL + '/User/add-to-cart', item).pipe(
      map((res: any) => {
        if (res == true) {
          this.getUserCart().subscribe();
          return true;
        }
        return false;
      }));
  }

  clearCart(): Observable < boolean > {
    return this.http.get < boolean > (this.baseURL + '/User/clear-cart').pipe(
      map((res: any) => {
        if (res == true) {
          this.getUserCart().subscribe();
          return true;
        }
        return false;
      }));
  }

  cartCheckOut(items: CartModel[]): Observable < boolean > {
    // post to db 
    return this.http.post<boolean>(this.baseURL + '/User/purchase-movie', items).pipe(
      map((res: any) => {
        if (res == true) {
          this.clearCart().subscribe();
          return true;
        }
        return false;
      }));
  }








  // user favorites
  getUserFavorites(): Observable < FavoriteModel[] > {
    return this.http.get < FavoriteModel[] > (this.baseURL + "/User/favorites");
  }


  deleteUserFavorite(favorite: any): Observable < boolean > {
    return this.http.post < boolean > (this.baseURL + "/User/un-favorite", favorite);
  }

  createUserFavorite(favorite: any): Observable < boolean > {
    return this.http.post < boolean > (this.baseURL + "/User/favorite", favorite);
  }



  // check movie service 
  isMoviePurchased(movieId: number): Observable < boolean > {
    return this.http.get < boolean > (this.baseURL + `/user/check-movie-purchased/${movieId}`);
  }

  isMovieFavorite(movieId: number): Observable < boolean > {
    return this.http.get < boolean > (this.baseURL + `/user/check-movie-favorite/${movieId}`);


  }
}
