import { Cart } from './cart.model';
import { Product } from './../../Model/product.model';
import { ProductRepository } from './../../Model/ProductRepository';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public seletedCategory: string = null;
  public productPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository, private cart: Cart, private router: Router) {

  }

  ngOnInit(): void {

  }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productPerPage;
    console.log("selected category: "+this.seletedCategory);
    return this.repository.getProducts(this.seletedCategory).splice(pageIndex, this.productPerPage);
  }

  get categories(): string[] {
    return this.repository.getAllCategories();
  }

  changeCategory(newCategory?: string) {
    this.seletedCategory = newCategory;
  }

  changePage(pageNum: number) {
    this.selectedPage = pageNum;
  }

  changePageSize(productsSize: number) {
    this.productPerPage = productsSize;
    this.changePage(1);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
      .getProducts(this.seletedCategory).length / this.productPerPage)).fill(0).map((x, i) => i + 1);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl('/cart');
  }

}
