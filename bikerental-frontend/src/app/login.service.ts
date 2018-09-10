import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { of} from "rxjs";

const USER_LOGIN_URL = 'http://localhost:8000/admin/login/';
const AUTH_TOKEN_URL = 'http://localhost:8000/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  TOKEN ;

  constructor(
    private http: HttpClient
  ) {}

  login(userData): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
    let authToken = this.http.post(AUTH_TOKEN_URL, userData, httpOptions);
    this.TOKEN = of(authToken);
    return authToken;
  }

}
