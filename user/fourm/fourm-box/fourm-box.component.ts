import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-fourm-box',
  templateUrl: './fourm-box.component.html',
  styleUrls: ['./fourm-box.component.css']
})
export class FourmBoxComponent {
  @Input() fourms:any;
}
