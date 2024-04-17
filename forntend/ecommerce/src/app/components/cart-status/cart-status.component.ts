import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
//defines metadata
@Component({
  selector: 'app-cart-status',//identify this component in html
  templateUrl: './cart-status.component.html',//components view
  styleUrl: './cart-status.component.css'
})
export class CartStatusComponent {
  
  totalPrice = 0.0
  totalQuantity = 0
  constructor(private cartService: CartService) { }
  
  ngOnInit() {//implicit method
    this.updateCartStatus();                                                              //calling method when component is initialized
   }
  
  updateCartStatus() {
    this.cartService.totalPrice.subscribe((data) => {
      this.totalPrice = data;
    });
    this.cartService.totalQuantity.subscribe((data) => {
      this.totalQuantity = data;
    });
  }
}