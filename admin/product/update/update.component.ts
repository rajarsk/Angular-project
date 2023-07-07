import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // Id:any;
  // product: any;
  productId: any;
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
    this.productService.getProductById(this.productId).subscribe(
      data => {
        this.product = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product.id,this.product).subscribe(
      data => {
        alert('Product updated successfully');
      },
      error => {
        console.log(error);
      }
    );
  }
}
