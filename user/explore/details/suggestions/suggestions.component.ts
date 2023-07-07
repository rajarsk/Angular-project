import { Component,Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent {
  id: any;
  products: any;
  constructor(private ds:DetailsService, private ar: ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data: {id:any}) {
    this.ar.params.subscribe(
      {
        next: (params) => {
          this.id = params['id']
          this.readData()
        },
        error: () => this.id = 0
      }
    )
    console.log(this.data.id)
    this.ds.getDetails(this.data.id).subscribe({
    next: (data:any)=> this.products=data,
    error: ()=> this.products = {}
  })
  }
  readData() {
    this.ds.getDetails(this.id).subscribe({
      next: (data: any) => this.products = data,
      error: () => this.products = {}
    })
  }
  
}
