import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/app/services/contactus.service';
import { ProductService } from 'src/app/services/product.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  totalProducts: number = 0;
  totalContacts: number = 0;
  totalReviews: number = 0;

  constructor(private productService: ProductService,
    private contactService: ContactusService,
    private reviewService: ReviewService) { }
    ngOnInit(): void {
      this.productService. getproducts().subscribe((products: any) => {
        this.totalProducts = products.length;
      });
  
      this.contactService.getContacts().subscribe((contacts: any) => {
        this.totalContacts = contacts.length;
      });
  
      this.reviewService.getReviews().subscribe((reviews: any) => {
        this.totalReviews = reviews.length;
      });
    }
}

