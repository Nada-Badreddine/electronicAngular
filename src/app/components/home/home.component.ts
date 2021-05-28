import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';
import {serverResponse,ProductModelServer} from '../../models/product.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: ProductModelServer[] = [];
  constructor(private productService: ProductService,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe((prods: serverResponse) => {
     this.products = prods.products;

    });
  }

  AddProduct(id: Number) {
    this.cartService.AddProductToCart(id);
  }


  
  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }

}
