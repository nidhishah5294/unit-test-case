import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  teamProductList: any = [];
  searchText!: string;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(data => {
      this.teamProductList = data;
    })
  }

  getProductList() {

  }

  filterProductList() {
    let val = this.searchText;
    this.productService.filterProductList(val).then(data=>{
      this.teamProductList = data;

    })
  }

  getFilterCount(){

  }

}
