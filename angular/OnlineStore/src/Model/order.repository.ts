import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { Injectable } from '@angular/core';


@Injectable()
export class OrderRepository {

    private orders: Order[] = [];

    private loaded: boolean = false;

    constructor(private dataSource: RestDataSource) {

    }

    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders().subscribe(orders => this.orders = orders);
    }

    getOrders(): Order[] {
        if (!this.loaded) {
            this.orders;
        }
        return null;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }

    updateOrder(order: Order) {
        this.dataSource.updateOrder(order).subscribe(uorder => {
            this.orders.splice(this.orders.findIndex(o => o.id == uorder.id), 1, uorder);
        });
    }

    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(dorder => {
            this.orders.splice(this.orders.findIndex(o => o.id == dorder.id), 1);
        });
    }
}