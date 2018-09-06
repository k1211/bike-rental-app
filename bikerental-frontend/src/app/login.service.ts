import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const USER_LOGIN_URL = 'http://localhost:8000/admin/login/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
     private http: HttpClient
  ) {  }

  login(userData): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-CSRFToken': 'test'
      })
    };
    return this.http.post(USER_LOGIN_URL, userData, httpOptions);
  }
}
