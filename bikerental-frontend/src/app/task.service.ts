import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Task} from "./task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  taskUrl = 'http://127.0.0.1:8000/api/task/';

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Object> {
    return this.http.get(this.taskUrl);
  }

  updateTask(): void {
    // return this.http.put('http://127.0.0.1:8000/api/task/');
  }

  createTask(task: Task): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    // 'Authorization': 'my-auth-token'
    return this.http.post(this.taskUrl, task, httpOptions);
  }

}
