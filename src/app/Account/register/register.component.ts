import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Core/Services/account.service';
import { RegisterModel } from 'src/app/Core/Models/RegisterModel';
import { map } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = {} as RegisterModel;
  registerSuccess = true;
  constructor(private accountService : AccountService, private router: Router) { }
  emailExisted! : boolean; 


  Form = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirmedPassword: new FormControl("", Validators.required),
    firstname: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    dateOfBirth: new FormControl("", Validators.required),
  });

  ngOnInit(): void {
  }


  submitForm() {
    if (this.Form.invalid) {
    }
 
    this.model =  {
      email : this.Form.get('email')?.value, 
      password: this.Form.get('password')?.value,
      firstname: this.Form.get('firstname')?.value,
      lastname: this.Form.get('lastname')?.value,
      dateOfBirth:  this.Form.get('dateOfBirth')?.value.toString(),
      confirmPassword: this.Form.get('confirmedPassword')?.value,
    };


  //   this.accountService.checkEmail(this.model.email).pipe(map ( (res:any)=> {
  //   this.emailExisted = res;
  //   //console.log("within the check email service", this.emailExisted);
  // }));
  //   //console.log(this.emailExisted);
  //   if (this.emailExisted == false) {
  //     //console.log(this.emailExisted);
  //   }

    this.accountService.userRegister(this.model)
    .subscribe(
 
      res => {
        
        if (res) {
          this.router.navigateByUrl("/account/login");
          this.registerSuccess = true;}
        else {
          this.registerSuccess = false;
        }
      }
 )
      
 
    }

}
