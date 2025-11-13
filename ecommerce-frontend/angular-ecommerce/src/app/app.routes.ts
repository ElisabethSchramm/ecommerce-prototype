import { Router, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductDetailsComponent } from './components/product-details/product-details';
import { CartDetailsComponent } from './components/card-details/card-details';
import { CheckoutComponent } from './components/checkout/checkout';
import { AuthGuard } from '@auth0/auth0-angular';
import { MembersPageComponent } from './components/members-page/members-page';
import { inject } from '@angular/core';


function sendToLoginPage() {
  // Use injector to access any service available within your application
  const router = inject(Router);

  // Redirect the user login page
  router.navigate(['/login']);
}

export const routes: Routes = [

  { path: 'members', component: MembersPageComponent, canActivate: [AuthGuard], data: {onAuthRequired: sendToLoginPage}}, 
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'search/:keyword', component: ProductListComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' }
];


