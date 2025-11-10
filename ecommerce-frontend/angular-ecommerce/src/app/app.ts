import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu';
import { SearchComponent } from './components/search/search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCategoryMenuComponent, SearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-ecommerce');
}
