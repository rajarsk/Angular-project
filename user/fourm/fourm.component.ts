import { Component ,Input} from '@angular/core';
import { FourmService } from 'src/app/services/fourm.service';
@Component({
  selector: 'app-fourm',
  templateUrl: './fourm.component.html',
  styleUrls: ['./fourm.component.css']
})
export class FourmComponent {
fourms:any
constructor(private fs:FourmService)  {
  this.fs.getFeedbacks().subscribe(
     {
         next : (data:any)=> this.fourms=data
     }
  )
}
}
