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
      console.log("Length of carts ", cs[0].payload.doc.data());
      this.cartItems = cs.map(x => {
        return {   
          id : x.payload.doc.id ,
          ...x.payload.doc.data() as {}
      }
      });
    });
    console.log("Shopping cart items... ", this.cartItems); 
  }

  deleteCartItem(index: number) {
    this.cart.deleteCartItem(this.cartItems[index].id);
  }

  updateAmount(index: number) {
    console.log("Update quantity in cart.");
    this.cart.updateAmount(this.cartItems[index].id, this.cartItems[index].amount );
  }

}
