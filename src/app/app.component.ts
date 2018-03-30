import { Component, EventEmitter} from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [

      new Product(
      'MYSHOES',
      'Nike Air Max',
      '/assets/images/products/nike-shoes.jpg',
      ['Men', 'Shoes', 'Running Shoes'],
      109.99),
      
      new Product(
        'NIKEJACKET',
        'Blue Jacket',
        '/assets/images/products/nike-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        283.99),

        new Product(
          'NIKEHAT',
          'Nike Swoosh Hat',
          '/assets/images/products/nike-hat.jpg',
          ['Unisex', 'Accessories', 'Hats'],
          29.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked:', product);
  }

}
