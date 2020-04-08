import { OrderRepository } from './../../Model/order.repository';
import { Order } from './../../Model/order.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public orderRepository: OrderRepository, public order: Order) {

  }

  ngOnInit(): void {

  }

  submitForm(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.orderRepository.saveOrder(this.order).subscribe(orders => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      })
    }

  }

}
