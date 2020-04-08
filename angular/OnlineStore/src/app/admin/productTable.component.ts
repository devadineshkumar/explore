import { ProductRepository } from './../../Model/ProductRepository';
import { Product } from './../../Model/product.model';
import { Component } from '@angular/core';

@Component({
    templateUrl: "./productTable.component.html"
})
export class ProductTableComponent {

    constructor(private repository: ProductRepository) {

    }

    getProducts(): Product[] {
        return this.repository.getProducts();
        
    }

    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }


}