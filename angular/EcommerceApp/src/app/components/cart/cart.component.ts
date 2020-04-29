import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Array<any>;

  constructor(private cart: CartService) {

  }

  ngOnInit(): void {
    
    this.cart.getCart().subscribe(cs => {
      this.cartItems = cs.map(x => {
        return {   
          id : x.payload.doc.id ,
          ...x.payload.doc.data() as {}
      }
      });
    });
  }

  deleteCartItem(index: number) {
    this.cart.deleteCartItem(this.cartItems[index].id);
  }

  updateAmount(index: number) {
    this.cart.updateAmount(this.cartItems[index].id, this.cartItems[index].amount );
  }

}
