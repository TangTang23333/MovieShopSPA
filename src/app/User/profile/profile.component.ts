import { Component, OnInit } from '@angular/core';
import { UserProfileModel } from 'src/app/Core/Models/UserProfileModel';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user  = {} as UserProfileModel;
  constructor(private userService : UserService) { }
  
  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(res =>
      { this.user = res;
        this.user.dateOfBirth = res.dateOfBirth.substring(0,10);
      }
      );
    
  }


  editProfile(){ 
    console.log(this.user);
    this.userService.updateUserProfile(this.user).subscribe(
      (res:any) => {
        if (res == true)  {
         this.userService.getUserProfile().subscribe(res => {
           this.user = res;
           this.user.dateOfBirth = res.dateOfBirth.substring(0,10);
          });
        }
      });
  }

 
}
