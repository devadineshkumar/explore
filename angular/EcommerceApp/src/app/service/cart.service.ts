import { Observable, from } from 'rxjs';
import { AuthService } from './auth.service';
import { Product } from './../components/interface/Products.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore, private as : AuthService) { 

  }

  addToCart(product) {
    return  this.fs.collection(`Users/${this.as.userId}/cart`).add(product);
  }

  getCart() {
      let urlValue = `/Users/${this.as.userId}/cart`;
      return this.fs.collection(urlValue).snapshotChanges(); 
  }

  deleteCartItem(id) {
    let urlValue = `/Users/${this.as.userId}/cart/${id}`;
    this.fs.doc(urlValue).delete();
  }

  updateAmount(id: string, amount: number) {
    let urlValue = `/Users/${this.as.userId}/cart/${id}`;
    this.fs.doc(urlValue).update({amount});
  }

}
