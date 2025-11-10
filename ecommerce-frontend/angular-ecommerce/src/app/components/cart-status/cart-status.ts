import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartDetailsComponent } from '../card-details/card-details';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-status',
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './cart-status.html',
  styleUrl: './cart-status.css',
})
export class CartStatusComponent implements OnInit {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

}
