import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  handleProductDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

}
