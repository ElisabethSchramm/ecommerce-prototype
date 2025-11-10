import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule, CurrencyPipe], 
  templateUrl: './product-list-grid.html',
  styleUrl: './product-list.css',
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}