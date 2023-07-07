import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  products:any;
  constructor(private http: HttpClient) { }
  getDetails(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/products/"+ id);
  }
}
