import { RestDataSource } from './rest.datasource';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { JsonpInterceptor } from '@angular/common/http';


@Injectable()
export class ProductRepository {

    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: RestDataSource) {

        dataSource.getProducts().subscribe(
            datas => {
                this.products = datas;
                this.categories = datas.map(data => data.category).filter(
                    (c, index, array) => array.indexOf(c) == index).sort();
            });
    }

    getProducts(category?: string): Product[] {
        return this.products.filter(data => (category == null || data.category == category));
    }

    getProduct(id: number) {
        return this.products.find(item => item.id = id);
    }

    getAllCategories(): string[] {
        return this.categories;
    }

    saveProduct(product: Product) {
        console.log(JSON.stringify(product));
        if (product.id == null || product.id == 0) {
            this.dataSource.saveProduct(product).subscribe(prod =>
                this.products.push(prod));
        } else {
            this.dataSource.updateProduct(product).subscribe(prod => {
                console.log(JSON.stringify(prod));
                this.products.splice(this.products.findIndex(p => p.id == product.id), 1, prod);
            });
        }
    }

    deleteProduct(id: number) {
        this.dataSource.deleteProduct(id).subscribe(prod => {
            this.products.splice(this.products.findIndex(p => p.id = prod.id), 1);
        });
    }

}