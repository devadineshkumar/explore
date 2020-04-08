import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './auth.service';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { Cart, CartLine } from './../app/store/cart.model';
import { NgModule } from '@angular/core';
import { ProductRepository } from './ProductRepository';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';


@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [
        ProductRepository,
        Cart,
        OrderRepository,
        Order,
        {
            provide: StaticDataSource, useClass: RestDataSource
        },
        RestDataSource,
        AuthenticationService
    ]
})

export class ModelModule { }