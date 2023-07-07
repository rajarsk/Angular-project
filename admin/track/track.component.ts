import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  newProduct: any = {};
  products: any;
  constructor(private productsService: ProductService ,private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.productsService.addProduct(this.newProduct).subscribe(() => {
      alert('Product added successfully!');
      this.newProduct = {};
    },
      error => {
        alert('Error adding product.');
        console.log(error);
      }
    );
  }
  
}
