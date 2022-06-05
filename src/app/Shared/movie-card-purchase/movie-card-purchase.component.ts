import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card-purchase',
  templateUrl: './movie-card-purchase.component.html',
  styleUrls: ['./movie-card-purchase.component.css']
})
export class MovieCardPurchaseComponent implements OnInit {
  @Input() title = "";
  @Input() posterURL = "";
  @Input() id = 0;
  @Input() purchasePrice = 0;
  @Input() purchaseNumber = "";
  @Input() purchaseDate = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
