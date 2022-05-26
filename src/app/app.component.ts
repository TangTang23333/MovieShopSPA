import { Component } from '@angular/core';

// component decorator => makes it angular component 
// every component in angular will return one view 
@Component({
  // like partial view name 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MovieShopClient';
}


// main.ts => appModule => AppComponent => View (html)