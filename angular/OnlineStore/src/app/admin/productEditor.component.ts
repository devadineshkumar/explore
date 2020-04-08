import { ProductRepository } from './../../Model/ProductRepository';
import { Product } from './../../Model/product.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';


@Component({
    templateUrl: './productEditor.component.html'
})
export class ProductEditorComponent {

    editing: boolean = false;
    product: Product = new Product();

    constructor(private repository: ProductRepository, private router: Router, private activatedRoute: ActivatedRoute) {
        this.editing = this.activatedRoute.snapshot.params["mode"] == 'edit';
        if (this.editing) {
            Object.assign(this.product, this.repository.getProduct(Number(this.activatedRoute.snapshot.params["id"])));
        }
    }

    save(form: NgForm) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl('/admin/main/products');
    }

}