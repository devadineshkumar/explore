import { Order } from './order.model';
import { Product } from './product.model';
import { Cart } from './../app/store/cart.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const PROTOCOL: string = "http";
const PORT: number = 4210;


@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        console.log("Invoking the http url... products..")
        return this.http.get<Product[]>(this.baseUrl + "products");
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + "orders", order);
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "login",
            {
                name: user,
                password: pass
            }).pipe(map(response => {
                this.auth_token = response.success ? response.token : null;
                return response.success;
            }));
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl + "product", product, this.getOptions());
    }

    updateProduct(product: Product): Observable<Product> {
        console.log("auth_token "+this.auth_token);
        return this.http.put<Product>(`${this.baseUrl}products/${product.id}`, product, this.getOptions());
    }

    deleteProduct(id: number): Observable<Product> {
        return this.http.delete<Product>(`${this.baseUrl}/products/${id}`, this.getOptions());

    }

    private getOptions() {
       
        return {
            headers: new HttpHeaders({
                "Anthorization": `Bearer<${this.auth_token}>`
            })
        };
    }

    getOrders(): Observable<Order[]> {
        return this.http.post<Order[]>(this.baseUrl + "orders", this.getOptions());
    }

    updateOrder(order: Order) : Observable<Order> {
        return this.http.put<Order>(`${this.baseUrl}/orders/${order.id}`, order, this.getOptions());
    }

    deleteOrder(id: number) : Observable<Order> {
        return this.http.delete<Order>(`${this.baseUrl}/orders/${id}`, this.getOptions());
    }

}