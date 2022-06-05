import { Component } from '@angular/core';
import { AccountService } from './Core/Services/account.service';

// component decorator => makes it angular component 
// every component in angular will return one view 
@Component({
  // like partial view name 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = " Movie Shop SPA";

  constructor(private accountService: AccountService) {

  }
  
  ngOnInit() {
    this.accountService.decodeClaim();
  }

  
}


// main.ts => appModule => AppComponent => View (html)