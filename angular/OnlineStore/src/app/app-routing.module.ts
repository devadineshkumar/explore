import { StoreFirstGuard } from './store/storefirst.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, StoreModule, RouterModule.forRoot(
    [
      { path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard] },
      { path: 'cart', component: CartDetailsComponent, canActivate: [StoreFirstGuard] },
      { path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard] },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [StoreFirstGuard] },
      { path: '**', redirectTo: "/store" }
    ]
  )],
  providers: [StoreFirstGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }