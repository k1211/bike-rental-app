import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


const USERS_URL = 'http://127.0.0.1:8000/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<Object> {
    return this.http.get(USERS_URL);
  }

}
