import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent implements OnInit {

  constructor(public rout:Router) { }

  ngOnInit() {
  }

}
