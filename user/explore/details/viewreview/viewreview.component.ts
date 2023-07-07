import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';
@Component({
  selector: 'app-viewreview',
  templateUrl: './viewreview.component.html',
  styleUrls: ['./viewreview.component.css']
})
export class ViewreviewComponent {
  @Input() prdid:any;
  reviews: any;
  constructor(private rs: ReviewService, private ar: ActivatedRoute) {

    this.rs.getReviews().subscribe({
      next: (data: any) => this.reviews = data,
      error: () => this.reviews = []
    })
  }
}
