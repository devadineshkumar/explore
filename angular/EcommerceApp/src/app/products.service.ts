import { Product } from './components/interface/Products.interface';
import { AngularFirestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private fs : AngularFirestore, private storage: AngularFireStorage) { 

  }

  getAllProducts() : Observable<Product[]> {
   return this.fs.collection<Product>('Products').valueChanges();
  }

  addNewProduct(Name: string, Price: number, image: File) {

   let imgRef =  this.storage.ref("/ProductImages/"+image.name);
   imgRef.put(image).then( () => {
      imgRef.getDownloadURL().subscribe( ProductPath => {
        this.fs.collection('Products').add( {
          Name,
          Price,
          ProductPath
        } );
      });
   });

  }

  getProducts() {
    return this.fs.collection('Products').snapshotChanges();
  }

  deleteProduct(id: any) {
    let url = `Products/${id}`;
    this.fs.doc(url).delete();
  }

  updateProduct(id: any, Price: any) {
    let url = `Products/${id}`;
    this.fs.doc(url).update({Price});
  }
}
