import { AuthService } from './../../service/auth.service';
import { CartService } from './../../service/cart.service';
import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/Products.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  add: number = -1;

  Products: Product[
    /* { Name: "Banana", Price: 40, Description: "Fruit", ProductPath: "assets/pic/banana.png" },
    { Name: "Kiwi", Price: 40, Description: "Fruit", ProductPath: "assets/pic/kiwi.png" },
    { Name: "Orange", Price: 40, Description: "Fruit", ProductPath: "assets/pic/orange.png" },
    { Name: "Strawberry", Price: 40, Description: "Fruit", ProductPath: "assets/pic/sberry.png" } */
  ];

  constructor(private ps: ProductsService, private cart: CartService,
    private as: AuthService, private router: Router) { 

  }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe(
      data => this.Products = data
    );
  }

  addToCart(index:number) {
    if(this.as.userId) {
      this.add = +index;
    } else {
      this.router.navigate(['/login'])
    }
  }

  buy(amount: number) {

    let productToBuy = this.Products[this.add];
    let data = {
      name: productToBuy.Name,
      price : productToBuy.Price,
      amount : +amount
    }

    this.cart.addToCart(data).then( () =>{
      this.add = -1;
    }).catch( error => console.log(error));
   
  }

}
