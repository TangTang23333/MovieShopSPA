import {
  Injectable
} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';


@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest <any> , next: HttpHandler): Observable < HttpEvent < any >> {

    // read token form local storage
    const jwtToken = localStorage.getItem('token');

    if (jwtToken) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${jwtToken}`),
        
      });
      return next.handle(authRequest);
    }


    return next.handle(request);
  }
}