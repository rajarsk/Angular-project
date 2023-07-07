import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  feedbackForm: any;
  types: string[] = ["t-shirts", "crops", "chudidhar", "sarees"]

  constructor(private fb: FormBuilder, private rs: ReviewService) {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(15)]],
      email: ['', [Validators.required, Validators.pattern(
        "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],

      type: ['t-shirts']
    });
  }
  savereviews() {
    var temp: any = {
      id: Math.round(Math.random() * 10000),
      name: this.feedbackForm.value.name,
      email: this.feedbackForm.value.email,
      type: this.feedbackForm.value.type,
      message: this.feedbackForm.value.message

    }
    this.rs.postReview(temp).subscribe(
      {
        next: data => {
          alert('Your Feedback is saved')
          location.reload();
        },
        error: (error) => alert('Not saved ---some Error')
      }

    )

  }

}
