import { OrderRepository } from './../../Model/order.repository';
import { Order } from './../../Model/order.model';
import { Component } from '@angular/core';

@Component({
    templateUrl: './OrderTable.component.html'
})
export class OrderTableComponent {

    includeShipped: boolean = false;


    constructor(public repository: OrderRepository) {

    }

    getOrders() : Order[] {   
        return this.repository.getOrders().filter( o => this.includeShipped || !o.shipped);
    }

    markShipped(order: Order) {
        order.shipped = true;
        this.repository.updateOrder(order);
    }

    deleteOrder(id: number) {
        this.repository.deleteOrder(id);
    }

}