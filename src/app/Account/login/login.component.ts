import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AccountService} from '../../Core/Services/account.service';
import { LoginModel } from 'src/app/Core/Models/LoginModel';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  constructor(private accountService : AccountService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
  }


  submitForm() {
    if (this.form.invalid) {
        
    }
    console.log("login page submit!");
    var model = {
      email: this.form.get('email')?.value, 
      password: this.form.get('password')?.value
    };
    this.accountService.userLogin(model)
    .subscribe(

      data => this.router.navigateByUrl("/"),
      (err: HttpErrorResponse) => 
        {this.invalidLogin = true;
          this.router.navigateByUrl("/account/login");}
     
      
    )
      
 
    }
 

 
}
