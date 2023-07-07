import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOption:any;
  constructor(private http: HttpClient) { }

  getproducts():Observable<any>{
    return this.http.get("http://localhost:3000/products");
  }
  getProductById(id: number) {
    return this.http.get("http://localhost:3000/products"+ id);
  }

  addProduct(product: any) {
    return this.http.post("http://localhost:3000/products",product);
  }

  updateProduct(id: number,product: any) {
    return this.http.put("http://localhost:3000/products"+ id,product);
  }

  deleteProduct(id: number) {
    return this.http.delete("http://localhost:3000/products"+id);
  }
  }
