import {
  Injectable
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {
  map,
  Observable
} from 'rxjs';
import {
  AccountService
} from '../Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {



  constructor(private accountService: AccountService,
    private router: Router) {


  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      console.log("auth guard canActivate method is running!");
    // conditional check 
    // check if user is authenticated, jwt exists and not expired
      return this.accountService.isLoggedIn.pipe(
        map(res => 
          {
            if (res) {
              return true;
            } else {
              this.router.navigate(["/account/login"]);
              return false;
            }
          }))
    

  }

}
