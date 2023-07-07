import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {
  id:any;
  servicelist: any;
  products: any;
  name: string = "";
  names: any = [];

  types: string[] = [
    "All",
    "Rings",
    "Shoes",
    "Cooling Glasses",
    "Watches"
  ]
  selected: string = "All"
  constructor(private ps: ProductService) {
    this.ps.getproducts().subscribe(
      {
        next: (data: any) => this.servicelist = data,
        error: () => this.servicelist = []
      }
    )
  }
}
