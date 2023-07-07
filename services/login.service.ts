import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  httpOptions: any;
  status: boolean = false;
  constructor(private http: HttpClient) { }
  loginstatus(): boolean {
    return this.status;
  }
  getUsersList(): Observable<any> {
    return this.http.get("http://localhost:3000/users")
  }
  //To post user data while signing up...

  newuser(data: any): Observable<any> {
    this.httpOptions = new HttpHeaders({

      'Content-Type': 'application/json',
    })


    return this.http.post("http://localhost:3000/users", data, this.httpOptions);

  }
}
