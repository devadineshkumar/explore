import { Order } from './order.model';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class StaticDataSource {

    private products: Product[] = [
        new Product(1, 'Puma Shoe', 'Shoes', 'Black sneaker shoe for a great looking.', 50),
        new Product(2, 'Nike Shoe', 'Shoes', 'Great shoe for better playing on outdoor.', 50),
        new Product(3, 'Polo T-Shirt', 'T-Shirts', 'Feel like a great start with Polo.', 50),
        new Product(4, 'Otto T-Shirt', 'T-Shirts', 'T-Shirt for perfect gentle man.', 50),
        new Product(5, 'Wrogn Shirt', 'Shirts', 'Classic designer shirts for Spring season', 50),
        new Product(6, 'Roadster Shoe', 'Shirts', 'Black shirt for a great looking.', 50),
        new Product(7, 'Fila Shoe', 'Shoes', 'Black sneaker shoe for a great looking.', 50),
        new Product(8, 'Adidas Shoe', 'Shoes', 'Black sneaker shoe for a great looking.', 50),
        new Product(9, 'Roadster Shoe', 'Shoes', 'Black sneaker shoe for a great looking.', 50),
        new Product(10, 'Woodland Shoe', 'Shoes', 'Black sneaker shoe for a great looking.', 50),
        new Product(11, 'Bata Shoe', 'Shoes', 'Black sneaker shoe for a great looking.', 50),
        new Product(12, 'Polo cargo Jeans', 'Jeans', 'Black Jeans for a great looking.', 50)
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);

    }
}