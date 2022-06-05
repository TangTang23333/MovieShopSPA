import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  JwtHelperService,
  JWT_OPTIONS
} from '@auth0/angular-jwt';
import {
  Observable,
  BehaviorSubject,
  map
} from 'rxjs';
import {
  LoginModel
} from '../Models/LoginModel';
import {
  RegisterModel
} from '../Models/RegisterModel';
import {
  TokenModel
} from '../Models/TokenModel';

import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // only account service can push value into this subject, closed for other service
  private isLoggedInSubject = new BehaviorSubject < boolean > (false);
  // observable public, so observers can call this property to get values
  public isLoggedIn = this.isLoggedInSubject.asObservable();
  private currentUserSubject = new BehaviorSubject < TokenModel > ({} as TokenModel);
  public currentUser = this.currentUserSubject.asObservable();
  
  constructor(private http: HttpClient, 
    private jwthelper: JwtHelperService, 
    private router: Router,
    private userService : UserService) {}

   

   readonly baseURL = environment.API_URL;
  // login component should notify navbar for condiitonal display
  // if we want to use data in unrelated components => subject
  // related components => use services 
  // 
  userLogin(login: LoginModel): Observable < boolean > {
    return this.http.post(this.baseURL + '/account/login', login)
      .pipe(map((res: any) => {
        if (res) {
          localStorage.setItem('token', res.token);
          //create the RXJS subjet with some values
          // login component will call login method and push values into subject
          // navbar component can subscribe to this subject and get updates 
          // any components can subscribe to this subject 
          // publish and subscribe pattern 
          // 
          this.isLoggedInSubject.next(true);
          this.decodeClaim();
          this.userService.getUserCart().subscribe();
          return true;
        }
        return false;

      }));
  }



  userRegister(user: RegisterModel): Observable < boolean > {
    return this.http.post(this.baseURL + '/account/register', user).pipe(
      map((res: any) => {
        if (res.id > 0) {
          return true;
        }
        return false;
      }));


  }


  decodeClaim() {
    // read the token and decode it 
    //console.log('inside isloggin function');
    var token = localStorage.getItem('token');


    if (token && !this.jwthelper.isTokenExpired(token)) {
      // decode and push to subject
      var claims = this.jwthelper.decodeToken(token);
      this.currentUserSubject.next(claims);
      this.isLoggedInSubject.next(true);
    }
  }


  logOut() {
    localStorage.removeItem("token");
    this.currentUserSubject.next({} as TokenModel);
    this.isLoggedInSubject.next(false);
  }


  checkEmail(email: string) : Observable<boolean>{
    return this.http.post<boolean>(this.baseURL + '/account/check-email', email).pipe(
      map((res: any) => {
        if (res == true) {
          return true;
        }
        return false;
      }));
      
        
        
      
};

}
