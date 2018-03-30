import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {

  //@Input producList - the Product[] passed to us.
  @Input() productList: Product[];


  //@Output onProductSelected - outputs the current Product whenever a new product is selected
  @Output() onProductSelected: EventEmitter<Product>;


  //Property currentProduct - local state containing the currenlty selected Product
  private currentProduct: Product;


  constructor() {
    this.onProductSelected = new EventEmitter();
   }


   clicked(product: Product): void {
     this.currentProduct = product;
     this.onProductSelected.emit(product);
   }

   isSelected(product: Product): boolean {
     if (!product || !this.currentProduct) {
       return false;
     }

     return product.sku === this.currentProduct.sku;
   }

}
