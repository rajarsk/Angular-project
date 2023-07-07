import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ListService {
  httpOptions:any;
  constructor(private http: HttpClient) { }
  getList():Observable<any>{
    return this.http.get("http://localhost:3000/list");
  }
}
