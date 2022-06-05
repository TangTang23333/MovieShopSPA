import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartModel } from 'src/app/Core/Models/CartModel';
import { UserService } from 'src/app/Core/Services/user.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [] as CartModel[];
  total!: number;
  constructor(private userService: UserService, private router: Router) { 
    
    
     }
  

  ngOnInit(): void {
    this.userService.cart.subscribe(res => {
      this.items = res;
      this.total = this.items.reduce((sum, a) => sum + a.price, 0); });

  paypal.Buttons({
    style: {
      layout: 'horizontal',
      color:  'black',
      shape:  'pill',
      label:  'paypal'
    },

    createOrder: (data: any, actions: any) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: this.total,
            },
          },
        ],
      });
    },

    onApprove: async (data: any, actions: any) => {
      //const payment = await actions.order.capture();
      //this.order.paymentId = payment.id;
      this.userService.cartCheckOut(this.items).subscribe(
        (res:any) => {
         
            if (res == true) {
              console.log("items purchases", this.items);
            
            this.router.navigate(['/user/purchases']);
          }
            // this.toastrService.success(
            //   'Payment Saved Successfully',
            //   'Success'
            // );
          });
          // error: (error) => {
          //   this.toastrService.error('Payment Save Failed', 'Error');
          // }
        },
     
  
    onError: (err: any) => {
      //this.toastrService.error('Payment Failed', 'Error');
      console.log(err);
    },

  }).render("#paypal");
  

}



removeFromCart(id: number){
  var item =  { movieId: id };
  this.userService.removeItemFromCart(item).subscribe();
  this.userService.getUserCart().subscribe(res => {
    this.items = res;
    this.total = parseInt(this.items.reduce((sum, a) => sum + a.price, 0).toFixed(5));
  });
}







  
  
    
  }

