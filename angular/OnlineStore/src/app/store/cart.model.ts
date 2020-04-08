import { Product } from './../../Model/product.model';
import { Injectable } from '@angular/core';


@Injectable()
export class Cart {

    public Lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;


    addLine(product: Product, quantity: number = 1, ) {
        let line = this.Lines.find(line => line.product.id == product.id);

        if (line != null) {
            line.quantity += quantity;
        } else {
            this.Lines.push(new CartLine(product, quantity));
        }
        this.recalculate()
    }

    updateQuantity(product: Product, quantity: number) {
        console.log("product id : ", product);
        console.log("product quantity : ", quantity);
        let line = this.Lines.find(line => line.product.id == product.id);
        console.log("product id : ", product.id);
        console.log("product quantity : ", quantity);
        if (line != undefined && quantity != null) {
            line.quantity = Number(quantity);
        }
        this.recalculate()
    }

    removeLine(id: number) {
        let index = this.Lines.findIndex(line => line.product.id = id);
        this.Lines.splice(index, 1);
        this.recalculate()
    }

    clearLines() {
        this.Lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;

        this.Lines.forEach(l => {
            this.itemCount += l.quantity;
            this.cartPrice += (l.quantity * l.product.price);
        });
    }


}

export class CartLine {

    constructor(public product: Product, public quantity: number) {

    }

    get lineTotal() {
        return this.quantity * this.product.price;
    }

}