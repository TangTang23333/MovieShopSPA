import { Component, OnInit } from '@angular/core';
import { PurchasedModel } from 'src/app/Core/Models/PurchaseCardModel';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  purchases:  PurchasedModel[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getUserPurchases().subscribe( res => this.purchases = res);
  }

}
