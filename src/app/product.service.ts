import { Injectable } from '@angular/core';
import { of } from 'rxjs';
const PRODUCT_LIST = [{
  'title': 'Brown eggs',
  'type': 'dairy',
  'description': 'Raw organic',
  'filename': '0.jpg',
  'height': 600,
  'width': 400,
  'price': 28.1,
  'rating': 4
},
{
  'title': 'White eggs',
  'type': 'dairy',
  'description': 'Raw organic',
  'filename': '0.jpg',
  'height': 600,
  'width': 400,
  'price': 28.1,
  'rating': 4
}]

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList = PRODUCT_LIST
  constructor() { }

  getProductList() {
    return of(this.productList);
  }
  filterProductList(searchString: string): Promise<any> {
    return new Promise(resolve => {
      resolve(this.productList.filter(
        product => product.title.toLowerCase().indexOf(searchString) > -1
      ))
    });

  }
}
