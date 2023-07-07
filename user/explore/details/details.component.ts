import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  id: any;
  panelOpenState = false;
  products: any;
  constructor(private ds: DetailsService, private ar: ActivatedRoute, public dialog: MatDialog) {
    this.ar.params.subscribe(
      {
        next: (params) => {
          this.id = params['id']
          this.readData()
        },
        error: () => this.id = 0
      }
    )
  }
  readData() {

    // this.ds.getProductsById(this.id).subscribe({
    //    next: (data:any)=> this.products=data,
    //    error: ()=> this.products = {}
    // })

    this.ds.getDetails(this.id).subscribe({
      next: (data: any) => this.products = data,
      error: () => this.products = {}
    })
  }
  openDialog() {

    this.dialog.open(SuggestionsComponent, {
      data: {
        id: this.id,
      },
    });
  }
}
