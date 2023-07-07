import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: any;
  constructor(private productService: ProductService, private router: Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.productService.getproducts().subscribe(data => {
      this.product = data;
    });
  }

  updateProduct(productId: number) {
    this.router.navigate(["update", productId]);
  }
}
