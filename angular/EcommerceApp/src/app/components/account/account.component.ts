import { ProductsService } from './../../products.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @ViewChild('image') image : ElementRef;

  productArray : Array<any>;


  constructor(private ps : ProductsService) {

   }

  ngOnInit(): void {
    this.ps.getProducts().subscribe( datas => {
      
      this.productArray = datas.map( x => {
        return {
          id : x.payload.doc.id,
          ...x.payload.doc.data()  as {}
        }
      })
      console.log("product array : ", this.productArray);
    });
  }

  addNewProduct(form:NgForm) {
    
    let name = form.value.name;
    let price = form.value.price;
    let image = (this.image.nativeElement as HTMLInputElement).files[0];
    console.log(image);
    this.ps.addNewProduct(name, price, image);

  }

  updateProduct(i:number) {

    this.ps.updateProduct(this.productArray[i].id, this.productArray[i].Price);
  }

  deleteProduct(index: number) {
    
    this.ps.deleteProduct(this.productArray[index].id);

  }

}
