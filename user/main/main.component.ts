import { Component } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  servicelist: any;
  list:any;
  constructor(private ls: ListService) {
    this.ls.getList().subscribe(
      {
        next: (data: any) => this.servicelist = data,
        error: () => this.servicelist = []
      }
    )
  }
}
