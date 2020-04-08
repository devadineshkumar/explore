import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './../checkout/checkout.component';
import { CartDetailsComponent } from './../cart-details/cart-details.component';
import { CartSummaryComponent } from './../cart-summary/cart-summary.component';
import { ModelModule } from './../../Model/model.module';
import { StoreComponent } from './store.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        BrowserModule,
        ModelModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        StoreComponent,
        CartSummaryComponent,
        CartDetailsComponent,
        CheckoutComponent
    ],
    exports: [
        StoreComponent, CartDetailsComponent, CheckoutComponent
    ]
})
export class StoreModule { }

